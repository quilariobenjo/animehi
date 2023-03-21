'use client';
import React from 'react';
import Button from '../shared/Button';
import { BsDownload } from 'react-icons/bs';
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb';
import NextLink from 'next/link';
import { EpisodesSource } from '@/types/types';
import useWatchStore from '@/store/watch';

type ControlsProps = {
  anilistId: string;
  slug: string;
  currentEpisodeNumber?: number;
  totalEpisodes?: number;
  nextEpisode: EpisodesSource;
  prevEpisode: EpisodesSource;
};

const Controls: React.FC<ControlsProps> = ({
  anilistId,
  slug,
  nextEpisode,
  prevEpisode,
  totalEpisodes,
  currentEpisodeNumber,
}) => {
  const download = useWatchStore(store => store.download);

  return (
    <div className="flex justify-between bg-[#010101] px-2">
      {download ? (
        <a
          href={download}
          // rel="noreferer"
          target="_blank"
          className="relative flex h-[38px] items-center gap-1 px-2 text-[#aaaaaa]"
        >
          <BsDownload />
          Download
        </a>
      ) : null}

      <div className="flex space-x-1 text-[#aaaaaa]">
        {currentEpisodeNumber !== 1 && (
          <NextLink
            href={`/watch/[...params]/`}
            as={`/watch/${anilistId}/${slug}/${prevEpisode?.number}`}
            prefetch={false}
            className="flex items-center gap-1 px-2 text-xs transition hover:bg-[#1c1c1c] md:text-sm"
          >
            <TbPlayerTrackPrevFilled />
            Prev
          </NextLink>
        )}
        {currentEpisodeNumber !== totalEpisodes ? (
          <NextLink
            href={`/watch/[...params]/`}
            as={`/watch/${anilistId}/${slug}/${nextEpisode?.number}`}
            prefetch={false}
            className="flex items-center gap-1 px-2 text-xs transition hover:bg-[#1c1c1c] md:text-sm"
          >
            Next
            <TbPlayerTrackNextFilled />
          </NextLink>
        ) : null}
      </div>
    </div>
  );
};

export default Controls;
