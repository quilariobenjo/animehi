'use client';
import React from 'react';
import Button from '../shared/Button';
import { BsDownload } from 'react-icons/bs';
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb';

const Controls = () => {
  return (
    <div className="flex justify-between bg-[#010101] px-2">
      <Button
        type="button"
        className="relative flex h-[38px] items-center gap-1 px-2 text-[#aaaaaa]"
      >
        <BsDownload />
        Download
      </Button>
      <div className="flex space-x-1 text-[#aaaaaa]">
        <Button
          type="button"
          className="flex items-center gap-1 px-2 transition hover:bg-[#1c1c1c]"
        >
          <TbPlayerTrackPrevFilled />
          Prev
        </Button>
        <Button
          type="button"
          className="flex items-center gap-1 px-2 transition hover:bg-[#1c1c1c]"
        >
          Next
          <TbPlayerTrackNextFilled />
        </Button>
      </div>
    </div>
  );
};

export default Controls;
