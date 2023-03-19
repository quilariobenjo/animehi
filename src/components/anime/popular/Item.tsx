'use client';
import { Options } from '@popperjs/core';
import Popup from '@/components/shared/Popup';
import { AnimeMedia } from '@/types/types';
import Image from 'next/image';
import PopupInfo from '@/components/shared/PopupInfo';

const popupOptions: Partial<Options> = {
  strategy: 'absolute',

  modifiers: [
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }) => {
        state.styles.popper.height = `auto`;
        state.styles.popper.width = `${state.rects.reference.width * 7}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      effect({ state }) {
        const { width, height } =
          state.elements.reference.getBoundingClientRect();
        state.elements.popper.style.width = `${width * 7}px`;
        state.elements.popper.style.height = `auto`;
      },
    },
  ],
};

type ItemProps = {
  data: AnimeMedia;
};

const ItemImage: React.FC<ItemProps> = ({ data }) => {
  return (
    <Popup
      reference={
        <div className="relative w-[55px] cursor-default">
          <span className="relative block h-full w-full pb-[130%]">
            <Image
              fill
              sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
              src={data.coverImage}
              alt={data.title.english}
              style={{ objectFit: 'cover' }}
            />
          </span>
        </div>
      }
      options={popupOptions}
      offset={[20, -20]}
    >
      <PopupInfo data={data} />
    </Popup>
  );
};

export default ItemImage;
