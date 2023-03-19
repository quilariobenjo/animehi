'use client';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './popular.module.css';
import { AiFillHeart } from 'react-icons/ai';
import { ENIME_URL } from '@/lib/constant';
import { AnimeMedia } from '@/types/types';
import ItemImage from './Item';

function IconPopular() {
  return (
    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64"
      ></path>
    </svg>
  );
}

export default function Popular() {
  const [popular, setPopular] = useState<AnimeMedia[] | []>([]);

  const fetcher = async (url: string) => fetch(url).then(res => res.json());

  const { data, error } = useSWR(`${ENIME_URL}/popular?perPage=9`, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (!data && !error) return;

    setPopular(data?.data);
  }, [error, data]);

  return (
    <>
      <div className="relative w-full py-4 pt-2">
        <div className="flex gap-2 px-4 pb-4 text-white">
          <span className="text-primary">
            <IconPopular />
          </span>
          <h3 className="text-lg uppercase leading-6">Popular Series</h3>
        </div>
        <div className="">
          <div>
            <ul className="overflow-hidden rounded">
              <li className="relative w-full pt-[130px] pl-14">
                <div>
                  <div
                    style={{ backgroundImage: "url('/top-1.png')" }}
                    className="absolute bottom-[10px] left-[15px] top-auto z-30 h-14 w-12 bg-contain bg-center bg-no-repeat px-3"
                  ></div>
                  <div
                    className={classNames(
                      styles.overlay,
                      'absolute inset-0 h-auto w-auto'
                    )}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={popular?.[0]?.coverImage}
                        style={{ objectFit: 'cover' }}
                        alt={
                          popular?.[0]?.title.english ||
                          popular?.[0]?.title.userPreferred ||
                          popular?.[0]?.title.romaji
                        }
                        fill
                        sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                      />
                    </div>
                  </div>
                  <div className="relative z-50 min-h-[60px] leading-6">
                    <Link href="/">
                      <h4 className="text-lg text-[#dddddd] transition-colors hover:text-primary">
                        {popular?.[0]?.title.english ||
                          popular?.[0]?.title.userPreferred}
                      </h4>
                    </Link>
                    <div className="flex items-center gap-1 text-sm text-[#aaaaaa]">
                      <AiFillHeart />
                      <span>{popular?.[0]?.popularity}</span>
                    </div>
                  </div>
                </div>
              </li>
              {popular?.slice(1)?.map((anime, index) => (
                <li key={anime.id} className="mt-2">
                  <div className="relative flex">
                    <div className="relative flex w-full items-center overflow-hidden rounded-md bg-[#1c1c1c] pr-4 pl-[18px] transition-all">
                      <div
                        style={{
                          backgroundImage: `url('/top-${index + 2}.png')`,
                        }}
                        className="h-12 w-12 bg-contain bg-center bg-no-repeat px-3"
                      ></div>
                      <ItemImage data={anime} />
                      <div className="absolute left-[123px] px-2 py-3">
                        <Link
                          href={`/watch/${anime.anilistId}/${anime.slug}/${anime.currentEpisode}`}
                        >
                          <h4 className="text-sm text-[#dddddd] transition line-clamp-2 hover:text-primary">
                            {anime.title.english || anime.title.userPreferred}
                          </h4>
                        </Link>
                        <div className="flex items-center gap-1 text-xs">
                          <span className="rounded bg-primary px-1 text-[#dddddd]">
                            {anime.year}
                          </span>
                          <span className="flex rounded bg-[#8f7003] px-1 text-[#dddddd]">
                            {anime.currentEpisode}
                          </span>
                          <span className="rounded bg-[#666666] px-1 text-[#dddddd]">
                            {anime.format}
                          </span>
                          <span className="mx-2 inline-block h-[3px] w-[3px] rounded-full bg-[#515151]"></span>
                          <span className="flex items-center gap-1 text-[#515151]">
                            <AiFillHeart />
                            <span>{anime.popularity}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
