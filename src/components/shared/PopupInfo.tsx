'use client';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AnimeMedia, RecentMedia } from '@/types/types';
import Link from 'next/link';
import Button from './Button';
import { stripHtml } from '@/lib/utils/stripHtml';
import dayjs from '@/lib/utils/dayjs';

type PopupInfo = {
  data: AnimeMedia;
  episodeNumber: number;
};

export default function PopupInfo(props: PopupInfo) {
  const { data, episodeNumber } = props;
  return (
    <div className="relative h-full w-full overflow-hidden rounded-sm bg-background-800 pb-14 shadow-lg">
      <div className="flex items-center justify-between gap-2 px-3 pt-3">
        <h3
          style={{ color: data.color }}
          className="text-lg font-semibold leading-6 text-white line-clamp-2"
        >
          {data.title.english || data.title.userPreferred || data.title.native}
        </h3>
        <AiOutlinePlus className="h-6 w-6 font-bold text-primary" />
      </div>
      <div className="my-3 flex justify-between bg-background-700 py-1 px-3">
        <div className="text-sm text-[#888]">Episode {episodeNumber}</div>
        <div className="flex gap-1">
          <span className="flex items-center justify-center rounded bg-white px-1 text-xs font-semibold text-black">
            SUB
          </span>
          <span className="flex items-center justify-center bg-[#00a247] px-1 text-xs font-semibold text-white">
            TV Series
          </span>
        </div>
      </div>
      <p className="mb-2 pl-3 text-xs text-[#888] line-clamp-3">
        {stripHtml(data.description)}
      </p>
      <div className="mb-0.5 flex pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Other Names: </span>{' '}
        {data.title.userPreferred}; {data.title.romaji}
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Popularity: </span>
        {data.popularity}
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Date Aired: </span>
        {dayjs(data.createdAt).format('LL')} to ?
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Duration: </span>
        {data.duration} min
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Status: </span>
        {data.status}
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Genre: </span>
        {data.genre.map(g => (
          <Link href="/" key={g} className="text-primary">
            {g}{' '}
          </Link>
        ))}
      </div>
      <div className="mt-1">
        <Link
          href={`/watch/${data.anilistId}/${data.slug}/${episodeNumber}`}
          className="absolute bottom-0 left-0 right-0 flex h-12 w-full items-center justify-center bg-primary text-white transition hover:bg-secondary"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
}
