'use client';
import React from 'react';
import { AiFillDatabase } from 'react-icons/ai';
import Button from '../shared/Button';
import { FiPlayCircle } from 'react-icons/fi';
import Information from './Information';

const Servers = () => {
  return (
    <div className="mt-2 w-[65%]">
      <div className="flex">
        <div className="flex flex-col justify-center bg-[#1c1c1c] p-4">
          <h5 className="text-xs text-[#dddddd]">You are watching Episode 5</h5>
          <p className="text-xs text-[#aaaaaa]">
            If the current provider doesn&apos;t work other provider below
          </p>
        </div>
        <div className="flex w-full flex-col bg-[#010101] py-4 px-3">
          <div className="py-2 px-3">
            <h4 className="text-sm text-[#dddddd] line-clamp-2">
              Episode 10: Another Day, Another Sudden Encounter with the
              Egyptian Gods
            </h4>
          </div>
          <div className="py-2 px-4">
            <div className="flex items-center space-x-6">
              <AiFillDatabase className="text-white" />
              <div className="flex space-x-2">
                <Button
                  type="button"
                  className="flex items-center gap-1 rounded bg-primary px-2 text-xs text-[#dddddd]"
                >
                  <FiPlayCircle />
                  Gogoanime
                </Button>
                <Button
                  type="button"
                  className="flex items-center gap-1 rounded bg-[#1c1c1c] p-2 text-xs text-[#dddddd]"
                >
                  <FiPlayCircle />
                  Zoro
                </Button>
                <Button
                  type="button"
                  className="flex items-center gap-1 rounded bg-[#1c1c1c] p-2 text-xs text-[#dddddd]"
                >
                  <FiPlayCircle />
                  AnimeFox
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Information />
    </div>
  );
};

export default Servers;
