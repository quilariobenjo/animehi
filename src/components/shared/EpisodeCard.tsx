import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Options } from '@popperjs/core';
import Popup from './Popup';
import type { RecentMedia } from '@/types/types';
import PopupInfo from './PopupInfo';
import { BsFillPlayFill } from 'react-icons/bs';

const popupOptions: Partial<Options> = {
  strategy: 'absolute',
  modifiers: [
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }) => {
        state.styles.popper.height = `auto`;
        state.styles.popper.width = `${state.rects.reference.width * 2}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      effect({ state }) {
        const { width, height } =
          state.elements.reference.getBoundingClientRect();
        state.elements.popper.style.width = `${width * 2}px`;
        state.elements.popper.style.height = `auto`;
      },
    },
  ],
};

type EpisodeCardProps = {
  hasDub?: boolean;
  data: RecentMedia;
};

const EpisodeCard: React.FC<EpisodeCardProps> = ({ hasDub = false, data }) => {
  return (
    <Popup
      reference={
        <>
          <div className="relative mb-2 w-full overflow-hidden rounded-md pb-[140%]">
            <div className="absolute top-0 left-0 rounded text-xs font-semibold">
              HD
            </div>
            <div className="absolute bottom-0 left-0 z-20 flex w-full justify-between shadow-lg">
              <div className="rounded-tr-md bg-red-800 p-1 text-xs font-semibold text-white md:font-bold">
                Ep {data.number}
              </div>
              <div className="rounded-tr rounded-tl-md bg-[#ffc107] p-1 text-xs font-semibold text-white md:font-bold">
                SUB
              </div>
            </div>
            <div className="absolute h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  style={{ objectFit: 'cover' }}
                  fill
                  src={data.anime.coverImage}
                  alt={data.anime.title.english}
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                />
              </div>
            </div>
            <Link
              className="absolute inset-0 flex items-center justify-center bg-black/60 text-primary opacity-0 transition-opacity hover:opacity-100"
              href={`/watch/${data.anime.anilistId}/${data.anime.slug}/${data.number}`}
              aria-label={`Play - ${
                data.anime.title.english || data.anime.title.romaji
              } - Episode ${data.number}`}
            >
              <BsFillPlayFill className="h-12 w-12" />
            </Link>
          </div>
          <div>
            <h3
              style={{ color: data.anime.color }}
              className="text-center text-sm font-semibold leading-5 text-white line-clamp-2 md:text-base"
            >
              {data.anime.title.english ||
                data.anime.title.userPreferred ||
                data.anime.title.native}
            </h3>
          </div>
        </>
      }
      options={popupOptions}
      offset={[80, -50]}
    >
      <PopupInfo episodeNumber={data.number} data={data.anime} />
    </Popup>
  );
};

export default EpisodeCard;
