import React, { useState, useRef, useEffect, useMemo } from 'react';
import Player from '@oplayer/core';
import ui from '@oplayer/ui';
import hls from '@oplayer/hls';
import { AniSkip, EnimeSources } from '@/types/types';
import { extractUrl, sourceUrlToName } from '@/lib/helper';
import { CONSUMET_URL } from '@/lib/constant';
import { ISources } from '@/store/watch';
import { Highlight } from '@oplayer/ui/dist/types';
import skipOpEd from '@/lib/player/plugin';
import useWatchStore from '@/store/watch';

type OPlayerProps = {
  sources: EnimeSources[];
  malId: string;
  poster: string;
  episodeNumber: string;
  cover: string;
};

const OPlayer: React.FC<OPlayerProps> = ({
  sources,
  malId,
  poster,
  episodeNumber,
  cover,
}) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player>();
  const [source, setSource] = useState<ISources | undefined>(undefined);
  const [setDownload, setProvider] = useWatchStore(store => [
    store.setDownload,
    store.setProvider,
  ]);
  const provider = useWatchStore(store => store.provider);

  const posterImage = !poster
    ? cover
    : `https://images.weserv.nl/?url=${poster}`;

  useEffect(() => {
    if (playerRef.current) return;

    playerRef.current = Player.make(
      playerContainerRef.current as HTMLDivElement,
      {
        autoplay: true,
      }
    )
      .use([
        skipOpEd(),
        ui({
          pictureInPicture: true,
          miniProgressBar: true,
          subtitle: { fontSize: 30 },
          menu: [
            {
              name: 'Provider',
              children: sources.map(source => {
                return {
                  name: sourceUrlToName(source.url),
                  default: source.url.includes('gogoanime'),
                  value: source.target,
                };
              }),
              onChange({ value }) {
                setSourceIndex(
                  sources.findIndex(source => source.target === value)
                );

                setProvider(value.includes('?ep=') ? 'zoro' : 'gogoanime');
              },
            },
          ],
        }),
        hls({ matcher: () => true }),
      ])
      .create()
      .on('error', ({ payload }) => {
        if (payload?.fatal) {
          setSourceIndex(sourceIndex + 1);
        }
      })
      .on('videosourcechanged', () => {
        playerRef?.current?.loader?.on('hlsManifestParsed', (data: any) => {
          console.log(data);
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const episodeId = useMemo(
    () =>
      sources?.[sourceIndex].target.includes('/watch')
        ? sources?.[sourceIndex].target
            .replace('/watch', '')
            .replace('?ep=', '$episode$')
        : sources?.[sourceIndex].target,
    [sources, sourceIndex]
  );

  useEffect(() => {
    fetch(`${CONSUMET_URL}/meta/anilist/watch${episodeId}?provider=${provider}`)
      .then(res => res.json())
      .then(res => setSource(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceIndex, episodeId, provider]);

  useEffect(() => {
    if (source) {
      if (source.download) {
        setDownload(source?.download);
      }

      playerRef?.current
        ?.changeSource({
          src: `${process.env.NEXT_PUBLIC_CORS_PROXY}/${
            extractUrl(source) as string
          }`,
          ...(poster && {
            poster: posterImage,
          }),
        })
        .then(() => {
          if (malId) {
            fetch(
              `https://api.aniskip.com/v2/skip-times/${malId}/${episodeNumber}?types=op&types=recap&types=mixed-op&types=ed&types=mixed-ed&episodeLength=0`
            )
              .then(res => res.json())
              .then(res => {
                res = res as AniSkip;

                const highlights: Highlight[] = [];
                let opDuration = [],
                  edDuration = [];

                if (res.statusCode === 200) {
                  for (let result of res.results) {
                    if (result.skipType === 'op' || result.skipType === 'ed') {
                      const { startTime, endTime } = result.interval;

                      if (startTime) {
                        highlights.push({
                          time: startTime,
                          text: result.skipType === 'op' ? 'OP' : 'ED',
                        });
                        if (result.skipType === 'op')
                          opDuration.push(startTime);
                        else edDuration.push(startTime);
                      }

                      if (endTime) {
                        highlights.push({
                          time: endTime,
                          text: result.skipType === 'op' ? 'OP' : 'ED',
                        });
                        if (result.skipType === 'op') opDuration.push(endTime);
                        else edDuration.push(endTime);
                      }
                    }
                  }
                }

                playerRef.current?.emit('opedchange', [opDuration, edDuration]);
                playerRef.current?.plugins?.ui?.highlight?.(highlights);
              });
          }

          if (source?.subtitles) {
            playerRef.current?.plugins.ui.subtitle.updateSource([
              {
                default: true,
                src: source.subtitles.find(
                  subtitle => subtitle.lang === 'English'
                )?.url,
                name: 'English',
              },
            ]);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return (
    <div className="absolute inset-0 w-full">
      <div className="m-0 h-full w-full p-0" ref={playerContainerRef} />
    </div>
  );
};

export default OPlayer;
