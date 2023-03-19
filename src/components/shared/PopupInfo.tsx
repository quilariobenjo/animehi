'use client';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AnimeMedia, RecentMedia } from '@/types/types';
import Link from 'next/link';
import Button from './Button';
import { stripHtml } from '@/lib/utils/stripHtml';
import dayjs from '@/lib/utils/dayjs';

type PopupInfo = {
  data: RecentMedia;
};

export default function PopupInfo(props: PopupInfo) {
  const { data } = props;
  return (
    <div className="relative h-full w-full overflow-hidden rounded-sm bg-background-800 pb-14 shadow-lg">
      <div className="flex items-center justify-between gap-2 px-3 pt-3">
        <h3
          style={{ color: data.anime.color }}
          className="text-lg font-semibold leading-6 text-white line-clamp-2"
        >
          {data.anime.title.english ||
            data.anime.title.userPreferred ||
            data.anime.title.native}
        </h3>
        <AiOutlinePlus className="h-6 w-6 font-bold text-primary" />
      </div>
      <div className="my-3 flex justify-between bg-background-700 py-1 px-3">
        <div className="text-sm text-[#888]">Episode {data.number}</div>
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
        {stripHtml(data.anime.description)}
      </p>
      <div className="mb-0.5 flex pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Other Names: </span>{' '}
        {data.anime.title.userPreferred}; {data.anime.title.romaji}
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Popularity: </span>
        {data.anime.popularity}
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Date Aired: </span>
        {dayjs(data.anime.createdAt).format('LL')} to ?
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Duration: </span>
        {data.anime.duration} min
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Status: </span>
        {data.anime.status}
      </div>
      <div className="mb-0.5 pl-3 text-xs text-[#888]">
        <span className="text-[#525252]">Genre: </span>
        {data.anime.genre.map(g => (
          <Link href="/" key={g} className="text-primary">
            {g}{' '}
          </Link>
        ))}
      </div>
      <div className="mt-1">
        <Link
          href={`/watch/${data.anime.anilistId}/${data.anime.slug}/${data.number}`}
          className="absolute bottom-0 left-0 right-0 flex h-12 w-full items-center justify-center bg-primary text-white"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
}
