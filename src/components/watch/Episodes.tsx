'use client';
import React, { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { EpisodesSource } from '@/types/types';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';

type EpisodesProps = {
  episodes: EpisodesSource[];
  anilistId: string;
  slug: string;
  duration: string | number;
  animeTitle: string;
  coverImage: string;
  totalEpisodes?: number;
};

const Episodes: React.FC<EpisodesProps> = ({
  episodes,
  slug,
  anilistId,
  duration,
  animeTitle,
  coverImage,
  totalEpisodes,
}) => {
  const [epNumber, setEpNumber] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(epNumber) > episodes.length) return;

    setEpNumber(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="absolute inset-0 mt-2 ml-0 flex w-full flex-col md:ml-2">
        <div className="mb-2 flex justify-between">
          <div className="text-left text-[#dddddd]">
            Episodes:
            <span className="ml-1 text-xs text-[#aaaaaa] ">
              Total Episodes: {totalEpisodes}
            </span>
          </div>
          <form
            onSubmit={() => {
              if (Number(epNumber) > episodes.length) return;
            }}
          >
            <NextLink
              className="sr-only"
              href={`/watch/[...params]/`}
              as={`/watch/${anilistId}/${slug}/${epNumber}`}
              prefetch={false}
            >
              <Button
                type="submit"
                className="sr-only"
                aria-label="submit episode"
              >
                Type Anime Episode
              </Button>
            </NextLink>
            <Input
              type="number"
              // ref={searchRef}
              placeholder="Episode No."
              className="w-[104px] bg-[#1c1c1c] py-1 pl-2 !text-xs !text-[#aaaaaa]"
              onChange={handleInputChange}
              label="Ep Number"
              labelClassName="sr-only"
              aria-label="type anime episode"
            />
          </form>
        </div>
        <ul className="h-[690px] min-h-[690px] w-full overflow-y-auto overflow-x-hidden ">
          {episodes?.map(episode => (
            <li
              key={episode.id}
              className="mb-2 flex px-2 py-1 transition hover:bg-[#1c1c1c]"
            >
              <NextLink
                href={`/watch/[...params]/`}
                as={`/watch/${anilistId}/${slug}/${episode.number}`}
                prefetch={false}
                className="relative mr-2 h-[85px] min-h-[85px] w-[150px] min-w-[150px]"
              >
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={
                    episode.image
                      ? `https://images.weserv.nl?url=${episode.image}`
                      : coverImage
                  }
                  alt={episode.title}
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                />
                <div className="absolute rounded bg-[#000000bf] px-[5px] py-[4px] text-xs font-semibold text-white ">
                  {`${duration}:00`}
                </div>
              </NextLink>
              <div className="relative flex w-full flex-col justify-start">
                <NextLink
                  href={`/watch/[...params]/`}
                  as={`/watch/${anilistId}/${slug}/${episode.number}`}
                  prefetch={false}
                  className="text-sm text-[#dddddd] transition line-clamp-2 hover:text-primary"
                >
                  {episode.number}: {episode.title}
                </NextLink>
                <div className="text-xs font-medium">
                  <div className="leading-5 text-[#aaaaaa] line-clamp-2 md:text-sm">
                    {animeTitle}
                  </div>
                  <div className="text-[#aaaaaa]">Released - 2 months ago</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Episodes;
