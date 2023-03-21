// 'use client';
// import useVideoSource from '@/lib/hooks/useVideoSource';
// import React, { useEffect, useMemo, useState } from 'react';
// import useWatchStore from '@/store/watch';
// import { EnimeSources } from '@/types/types';
// import dynamic from 'next/dynamic';
// import OPlayer from './OPlayer';

// const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
//   ssr: false,
// });

// type VideoPlayerProps = {
//   episodeSources: EnimeSources[];
//   poster: string;
//   cover?: string;
//   episodeNumber: string;
// };

// const Video: React.FC<VideoPlayerProps> = ({
//   episodeSources,
//   poster,
//   cover,
//   episodeNumber,
// }) => {
//   return (
//     <div className="absolute inset-0 h-full w-full bg-[#010101]">
//       <OPlayer
//         malId=
//         poster={poster}
//         sources={episodeSources}
//         episodeNumber={episodeNumber}
//       />
//     </div>
//   );
// };

// export default Video;
