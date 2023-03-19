'use client';
import React from 'react';
import { GrSchedulePlay } from 'react-icons/gr';
import Image from 'next/image';
import InfoItem from '@/components/shared/InfoItem';
import Button from '@/components/shared/Button';
import { SiAnilist, SiMyanimelist, SiKitsu } from 'react-icons/si';
import { BiPlanet } from 'react-icons/bi';
import { AniMedia } from '@/types/types';

const LINKS = [
  {
    title: 'Anilist',
    icon: <SiAnilist />,
    href: '/',
  },
  {
    title: 'Myanimelist',
    icon: <SiMyanimelist />,
    href: '/',
  },
  {
    title: 'Kitsu',
    icon: <SiKitsu />,
    href: '/',
  },
  {
    title: 'Anime-Planer',
    icon: <BiPlanet />,
    href: '/',
  },
];

type InformationProps = {
  data: AniMedia;
};

const Information: React.FC<InformationProps> = ({ data }) => {
  return (
    <div className="mt-2 w-full py-4">
      <div className="mb-3 flex items-center rounded bg-[#1c1c1c] py-2 px-4">
        <div>
          <div className="text-sm text-[#dddddd]">Schedule</div>
          <span className="text-xs text-[#aaaaaa]">
            Next episode will air in 5d 10h 4m 15s
          </span>
        </div>
      </div>
      <div className="mb-3 flex flex-col md:flex-row">
        <div className="mr-2">
          <div className="relative h-[208px] min-h-[208px] w-[178px] min-w-[178px] rounded md:w-full md:max-w-full">
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src={data.image || data.cover || ''}
              alt={
                data.title.english ||
                data.title.userPrefered ||
                data.title.native ||
                ''
              }
              sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
            />
          </div>
          <div className="mt-4 mr-2 hidden md:block">
            <div className="mb-2 text-[#dddddd]">External Links</div>
            <div className="flex flex-col gap-1">
              {LINKS.map(link => (
                <a
                  key={link.title}
                  href="!#"
                  target="_blank"
                  className="flex items-center gap-1 bg-background-800 p-2 text-sm text-[#dddddd]"
                >
                  {link.icon}
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-[#dddddd]">
            {data.title.english || data.title.userPrefered || data.title.native}
          </h3>
          <span className="text-sm italic text-[#aaaaaa]">
            {data.synonyms?.map(synonym => (
              <span key={synonym} className="text-xs text-[#aaaaaa]">
                {synonym}{' '}
              </span>
            ))}
          </span>
          <div className="mb-2 text-[#dddddd]">Synopsis</div>
          <p
            dangerouslySetInnerHTML={{ __html: data.description || '' }}
            className="text-sm text-[#666666]"
          />
          <div className="mt-4 grid grid-cols-2">
            <div>
              <InfoItem type="Type" content={data.type} />
              <InfoItem
                type="Studios"
                content={data.studios?.map(studio => (
                  <span key={studio} className="text-xs text-primary">
                    {studio}{' '}
                  </span>
                ))}
              />
              <InfoItem type="ReleaseDate" content={data.releaseDate} />
              <InfoItem type="Status" content={data.status} />
              <InfoItem type="Adult" content={`${data.isAdult}`} />
              <InfoItem
                type="Genre"
                content={data.genres?.map(genre => (
                  <span key={genre} className="text-xs text-primary">
                    {genre}{' '}
                  </span>
                ))}
              />
            </div>
            <div>
              <InfoItem type="Country" content={data.countryOfOrigin} />
              <InfoItem type="Rating" content={data.rating} />
              <InfoItem type="Season" content={data.season} />
              <InfoItem
                type="Duration"
                content={`${data.duration || 24} min`}
              />
              <InfoItem type="Episode" content={data.totalEpisodes} />
              <InfoItem type="Popularity" content={data.popularity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
