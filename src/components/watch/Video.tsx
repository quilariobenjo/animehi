'use client';
import useVideoSource from '@/lib/hooks/useVideoSource';
import React, { useEffect, useState } from 'react';
import useWatchStore from '@/store/watch';
import { EnimeSources } from '@/types/types';
import VideoPlayer from './VideoPlayer';
import { proxyUrl } from '@/lib/utils/proxy';

type VideoPlayerProps = {
  episodeSources: EnimeSources[];
};

const Video: React.FC<VideoPlayerProps> = ({ episodeSources }) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [setSources, resetSources] = useWatchStore(store => [
    store.setSources,
    store.resetSources,
  ]);
  const videoLink = useWatchStore(store => store.videoLink);

  const { isLoading, isError, referer, sources } = useVideoSource({
    episodeId: episodeSources[sourceIndex].target,
    provider: 'gogoanime',
  });

  useEffect(() => {
    if (isLoading) {
      resetSources();
    }

    setSources(sources);
  }, [isLoading, resetSources, setSources, sources]);

  return (
    <div className="absolute inset-0 h-full w-full bg-[#010101]">
      <VideoPlayer src={videoLink as string} />
    </div>
  );
};

export default Video;
