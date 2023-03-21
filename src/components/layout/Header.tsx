'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import classNames from 'classnames';
import Image from 'next/image';
import Button from '../shared/Button';
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import NavItem from '../shared/NavItem';

export const LINKS = [
  {
    href: '/home',
    name: 'Home',
    icon: AiFillHome,
    className:
      'flex gap-1 text-[#dddddd] items-center hover:text-white transition text-sm',
  },
  {
    href: '/',
    name: 'Random',
    icon: FaRandom,
    className:
      'flex gap-1 text-[#dddddd] items-center hover:text-white transition text-sm',
  },
  // {
  //   href: '/watchlist',
  //   name: 'Watch List',
  //   icon: BsList,
  //   className: 'flex gap-1 items-center hover:text-white transition text-sm',
  // },
];

const Header = () => {
  return (
    <header
      className={classNames(
        'fixed top-0 left-0 z-[999] h-[52px] w-full bg-[#101010] transition-all md:h-[54px] 2xl:h-[58px]'
      )}
    >
      <div className="mx-auto flex h-[52px] w-full max-w-screen-2xl items-center gap-4 px-[3%] md:h-[54px] 2xl:h-[58px]">
        <button
          className="inline-block font-medium text-white"
          type="button"
          aria-controls="header menu"
        >
          <GiHamburgerMenu className="h-7 w-7" />
        </button>
        <Link href="/">
          <span className="z-10 flex items-center text-white">
            <div className="relative flex h-[38px] w-[32px] rotate-2 md:h-[33px] md:w-[37px]">
              <Image
                // containerclassname="relative h-[58px] w-[168px] md:h-[58px] md:w-[168px] mr-2"
                fill
                src="/animehi.svg"
                alt="Anime"
                priority
                sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
              />
            </div>
            <span className="text-lg font-bold italic">NIME</span>
            <span className="text-3xl font-bold italic">HI</span>
          </span>
        </Link>
        <div
          className={classNames(
            'absolute top-[52px] left-0 w-11/12 md:relative md:top-0 xl:block'
            // isSearchOpen ? 'block' : 'hidden'
          )}
        >
          <div className="group relative mr-0 w-full rounded-full bg-black/70 p-2 shadow-lg transition hover:bg-[#dddddd]">
            <form>
              <div className="grid grid-cols-[34px_1fr] items-center">
                <Link href={`/search?query=`}>
                  <Button
                    type="submit"
                    className="flex items-center justify-center text-[#dddddd] group-hover:text-[#101010]"
                    aria-label="submit anime search"
                  >
                    <AiOutlineSearch className="h-6 w-6" />
                  </Button>
                </Link>
                <input
                  type="search"
                  // ref={searchRef}
                  placeholder="Search anime..."
                  className="w-full bg-black/70 text-[#8f8e8e] outline-none transition active:text-[#aaaaaa] group-hover:bg-[#dddddd]"
                  // onChange={handleInputChange}
                  // label="Search Anime"
                  // labelClassName="sr-only"
                  aria-label="search anime"
                />
              </div>
            </form>
          </div>
        </div>
        <nav className="hidden w-3/6 md:block">
          <div>
            <ul className="flex gap-4 text-white">
              {LINKS.map(link => (
                <NavItem
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  icon={link.icon}
                  className={classNames(link.className, 'text-base')}
                  iconClassName="h-5 w-5"
                />
              ))}
            </ul>
          </div>
        </nav>
        <div className="flex w-full justify-end md:w-1/6">
          <div>
            <ul className="flex items-center gap-2 text-sm text-white md:text-base">
              <li>
                <Button
                  type="button"
                  className="flex h-8 w-28 items-center justify-center rounded-md bg-primary md:h-9"
                  aria-label="click to sign in"
                >
                  <span>Sign in</span>
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
