'use client';
import useVideoSource from '@/lib/hooks/useVideoSource';
import React, { useEffect, useMemo, useState } from 'react';
import useWatchStore from '@/store/watch';
import { EnimeSources } from '@/types/types';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
});

type VideoPlayerProps = {
  episodeSources: EnimeSources[];
  poster: string;
  cover?: string;
};

const Video: React.FC<VideoPlayerProps> = ({
  episodeSources,
  poster,
  cover,
}) => {
  const sourceIndex = useWatchStore(store => store.sourceIndex);
  const provider = useWatchStore(store => store.provider);
  const [setSources, resetSources] = useWatchStore(store => [
    store.setSources,
    store.resetSources,
  ]);
  const setDownload = useWatchStore(store => store.setDownload);
  const videoLink = useWatchStore(store => store.videoLink);

  const episodeId = useMemo(
    () =>
      episodeSources?.[sourceIndex].target.includes('/watch')
        ? episodeSources?.[sourceIndex].target
            .replace('/watch', '')
            .replace('?ep=', '$episode$')
        : episodeSources?.[sourceIndex].target,
    [episodeSources, sourceIndex]
  );

  const { isLoading, isError, data } = useVideoSource({
    episodeId,
    provider,
  });

  useEffect(() => {
    if (isLoading) {
      resetSources();
    }

    setDownload(data?.download);
    setSources(data?.sources);
  }, [isLoading, resetSources, setSources, data, setDownload]);

  return (
    <div className="absolute inset-0 h-full w-full bg-[#010101]">
      {isLoading && !videoLink ? (
        <div className="text-2xl text-white">Loading...</div>
      ) : (
        <VideoPlayer poster={poster} cover={cover} src={videoLink as string} />
      )}
    </div>
  );
};

export default Video;
