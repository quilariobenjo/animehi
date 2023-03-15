import React from 'react';
import { GrSchedulePlay } from 'react-icons/gr';
import Image from 'next/image';
import InfoItem from '@/components/shared/InfoItem';
import Button from '@/components/shared/Button';
import { SiAnilist, SiMyanimelist, SiKitsu } from 'react-icons/si';
import { BiPlanet } from 'react-icons/bi';

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

const Information = () => {
  return (
    <div className="mt-2 w-full py-4">
      <div className="mb-3 flex items-center rounded bg-[#006fe6] p-3 text-[#dddddd]">
        <span className="text-white">
          <GrSchedulePlay className="mr-2 h-[28px] w-[28px]" />
        </span>
        <div>
          <div className="text-sm">Schedule</div>
          <span className="text-xs">
            Next episode will air in 5d 10h 4m 15s
          </span>
        </div>
      </div>
      <div className="mb-3 flex">
        <div>
          <div className="relative mr-2 h-[208px] min-h-[208px] w-[178px] min-w-[178px] rounded">
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src="https://static.bunnycdn.ru/i/cache/images/9/90/904ab6ffdcdbbaa95ed2ab749bee5104.jpg"
              alt="anime"
            />
          </div>
          <div className="mt-4 mr-2">
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
          <h3 className="text-2xl text-[#dddddd]">Naruto</h3>
          <span className="text-sm italic text-[#aaaaaa]">
            Naruto; Naruto Shippuden
          </span>
          <div className="mb-2 text-[#dddddd]">Synopsis</div>

          <p className="text-sm text-[#666666]">
            Ayakashi are strange, supernatural creatures invisible to the
            majority of people. Though most are harmless, some ayakashi attack
            humans to devour their life force. Exorcist ninjas are tasked with
            protecting people from these spiteful spirits.
          </p>
          <div className="mt-4 grid grid-cols-2">
            <div>
              <InfoItem type="Type" content="TV" />
              <InfoItem type="Studios" content={<span>Toei Animation</span>} />
              <InfoItem type="ReleaseDate" content="1999" />
              <InfoItem type="Status" content="Ongoing" />
              <InfoItem type="Adult" content="False" />
              <InfoItem type="Genre" content={<span>Action</span>} />
            </div>
            <div>
              <InfoItem type="Country" content="Japan" />
              <InfoItem type="Rating" content="87" />
              <InfoItem type="Season" content="Fall" />
              <InfoItem type="Duration" content="24 min" />
              <InfoItem type="Episode" content="1053" />
              <InfoItem type="Popularity" content="999999" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
