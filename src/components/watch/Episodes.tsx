import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { EpisodesSource } from '@/types/types';

type EpisodesProps = {
  episodes: EpisodesSource[];
  anilistId: string;
  slug: string;
  duration: string;
  animeTitle: string;
};

const Episodes: React.FC<EpisodesProps> = ({
  episodes,
  slug,
  anilistId,
  duration,
  animeTitle,
}) => {
  return (
    <React.Fragment>
      <div className="mt-2 ml-2 flex w-[35%] flex-col">
        <div className="mb-2 text-left text-sm text-[#dddddd]">Episodes</div>
        <ul>
          {episodes?.map(episode => (
            <li key={episode.id} className="flex overflow-hidden">
              <NextLink
                href={`/watch/[...params]/`}
                as={`/watch/${anilistId}/${slug}/${episode.number}`}
                prefetch={false}
                className="relative mr-2 h-[85px] min-h-[85px] w-[150px] min-w-[150px]"
              >
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={`https://images.weserv.nl?url=${episode.image}`}
                  alt={episode.title}
                />
                <div className="absolute rounded bg-[#000000bf] px-[5px] py-[4px] text-xs font-semibold text-white ">
                  {`${duration}:00`}
                </div>
              </NextLink>
              <div className="relative flex w-full flex-col justify-start">
                <NextLink
                  href={`/watch/[...params]/`}
                  as={`/watch/97938/boruto:-naruto-next-generations/290`}
                  prefetch={false}
                  className="text-[#dddddd] line-clamp-2"
                >
                  {episode.number}: {episode.title}
                </NextLink>
                <div className="text-xs font-medium">
                  <div className="text-[#aaaaaa] line-clamp-2">
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
