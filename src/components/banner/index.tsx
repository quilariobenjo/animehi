'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import styles from './banner.module.css';
import classNames from 'classnames';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { spotlight } from '@/lib/utils/spotlight';
import Button from '../shared/Button';
import { BsFillPlayFill } from 'react-icons/bs';

const Banner = () => {
  return (
    <div className="relative mt-6">
      <div className="w-full max-w-full p-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {spotlight.map(anime => (
            <SwiperSlide id="slider" key={anime.id}>
              <div className="absolute inset-0 h-full w-full">
                <div className="absolute inset-0 overflow-hidden">
                  <div className={classNames(styles.overlay)}>
                    <img
                      src={anime.banner}
                      className="absolute h-full w-full"
                      style={{ objectFit: 'cover' }}
                      alt="naruto"
                    />
                  </div>
                  <div className="absolute bottom-[30px] top-[auto] z-[100] w-full max-w-[800px] pl-[15px] md:bottom-[53px]">
                    <h2 className="mx-0 mb-2 w-full max-w-lg text-lg font-bold text-white line-clamp-2 sm:text-2xl md:text-5xl">
                      {anime.title}
                    </h2>
                    <div></div>
                    <p className="mx-0 my-3 w-full max-w-lg pr-6 text-left text-slate-200 line-clamp-2 md:line-clamp-3">
                      {anime.description}
                    </p>
                    <Button className="flex h-11 w-40 items-center justify-center rounded-lg bg-primary text-lg font-medium uppercase text-white shadow-xl">
                      <span className="mr-1">
                        <BsFillPlayFill className="h-6 w-6 text-white" />
                      </span>
                      Play Now
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
