import React from 'react';

const EpisodeCardSkeleton = () => {
  return (
    <li className="relative mb-2 flex w-full flex-col gap-2 overflow-hidden rounded-md pb-[140%]">
      <div className="absolute inset-0 h-full w-full animate-pulse bg-[#101010]"></div>
      <div className="h-4 w-full animate-pulse bg-[#101010]"></div>
    </li>
  );
};

export default EpisodeCardSkeleton;
