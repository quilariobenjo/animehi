'use client';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { IconRelease } from '../subbed';
import { ENIME_URL } from '@/lib/constant';
import type { RecentMedia } from '@/types/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Pagination from '@/components/shared/Pagination';
import EpisodeCard from '@/components/shared/EpisodeCard';

const Chinese = () => {
  const [recentRelease, setRecentRelease] = useState<RecentMedia[] | []>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetcher = async (page: number) =>
    fetch(`${ENIME_URL}/recent?perPage=12&page=${page}&language=CN`).then(res =>
      res.json()
    );

  const { data, error } = useSWR([pageNumber, 'CN'], fetcher, {
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
            <SectionTitle title="Latest Chinese" />
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
            data={recentAnime.anime}
            key={recentAnime.sources[0]?.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Chinese;
