'use client';
import React, { useState, useEffect } from 'react';
import EpisodeCard from '@/components/shared/EpisodeCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { RecentMedia } from '@/types/types';
import useSWR from 'swr';
import { CONSUMET_URL, ENIME_URL } from '@/lib/constant';
import Pagination from '@/components/shared/Pagination';
import Button from '@/components/shared/Button';

export const IconRelease = () => (
  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M4 7V19H19V21H4C2 21 2 19 2 19V7H4M21.3 3H7.7C6.76 3 6 3.7 6 4.55V15.45C6 16.31 6.76 17 7.7 17H21.3C22.24 17 23 16.31 23 15.45V4.55C23 3.7 22.24 3 21.3 3M8 5H13V11H8V5M21 15H8V13H21V15M21 11H15V9H21V11M21 7H15V5H21V7Z"
    ></path>
  </svg>
);

export default function Subbed() {
  const [recentRelease, setRecentRelease] = useState<RecentMedia[] | []>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetcher = async (page: number) =>
    fetch(`${ENIME_URL}/recent?perPage=12&page=${page}&language=JP`).then(res =>
      res.json()
    );

  const { data, error } = useSWR([pageNumber, 'JP'], fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (!data && !error) return;

    setRecentRelease(data?.data);
  }, [pageNumber, error, data]);

  return (
    <div className="p-0">
      <div className="flex items-center justify-between text-white">
        <div className="w-full">
          <div className="flex w-full items-center gap-2">
            <span className="text-primary">
              <IconRelease />
            </span>
            <SectionTitle title="Latest Subbed" />
          </div>
        </div>
        <Pagination
          className="rounded-full p-1 text-[#ededed] transition hover:bg-background-900 md:p-2"
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
      <ul className="relative grid grid-cols-3 gap-3 overflow-hidden md:grid-cols-4 lg:grid-cols-6">
        {recentRelease?.map(recentAnime => (
          <EpisodeCard
            data={recentAnime}
            key={recentAnime.sources[0]?.id}
          />
        ))}
      </ul>
    </div>
  );
}
