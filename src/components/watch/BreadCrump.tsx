'use client';
import React from 'react';

const BreadCrump = () => {
  return (
    <div className="mb-3 mt-1">
      <ul className="flex space-x-2 text-xs text-[#515151]">
        <li>Home</li>
        <li>
          <span className="mx-2 inline-block h-[3px] w-[3px] rounded-full bg-[#515151]"></span>
        </li>
        <li>TV Series</li>
        <li>
          <span className="mx-2 inline-block h-[3px] w-[3px] rounded-full bg-[#515151]"></span>
        </li>
        <li>One Piece</li>
      </ul>
    </div>
  );
};

export default BreadCrump;
