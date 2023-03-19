import React from 'react';
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';

const Related = () => {
  return (
    <div className="mt-8">
      <div className="mb-2 text-base text-[#dddddd]">Related</div>
      <ul>
        <li className="mb-3 flex h-[85px] bg-[#1c1c1c]">
          <div className="relative mr-3 h-[85px] min-h-[85px] w-[75px] min-w-[75px]">
            <Image
              style={{ objectFit: 'cover' }}
              src="https://img.zorores.com/_r/1366x768/100/0b/4a/0b4a020950f9929b73a37d72c67eb001/0b4a020950f9929b73a37d72c67eb001.jpg"
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              alt=""
              fill
            />
          </div>
          <div className="mt-2 flex flex-col text-xs">
            <span className="text-[#515151]">Prequel</span>
            <Link href={`/watch/21/one-piece/1`}>
              <h4 className="text-sm text-slate-200 transition line-clamp-2 hover:text-primary">
                ONE PIECE
              </h4>
            </Link>
            <div className="mt-1 flex items-center gap-1 text-xs">
              <span className="text-[#515151]">TV</span>
              <span className="mx-2 inline-block h-[3px] w-[3px] rounded-full bg-[#515151]"></span>
              <span className="text-[#515151]">14 eps</span>
              <span className="mx-2 inline-block h-[3px] w-[3px] rounded-full bg-[#515151]"></span>
              <span className="flex items-center gap-1 text-[#515151]">
                <AiFillHeart />
                <span>999999</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Related;
