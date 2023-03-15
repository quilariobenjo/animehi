import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { APITypes, PlyrProps, usePlyr } from 'plyr-react';
import 'plyr-react/plyr.css';
import { Options } from 'plyr';
const useHls = (src: string, options: Options | null) => {
  const hls = useRef<Hls>(new Hls());
  const hasQuality = useRef<boolean>(false);
  const [plyrOptions, setPlyrOptions] = useState<Options | null>(options);

  useEffect(() => {
    hasQuality.current = false;
  }, [options]);

  useEffect(() => {
    const videoMedia = document.querySelector('.plyr-react')!;
    hls.current.loadSource(src);
    hls.current.attachMedia(videoMedia as HTMLMediaElement);
    hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
      if (hasQuality.current) return;
      const levels = hls.current.levels;
      const quality = {
        default: levels[levels.length - 1].height,
        options: levels.map(level => level.height),
        forced: true,
        onChange: (newQuality: number) => {
          console.log('changes', newQuality);
          levels.forEach((level, levelIndex) => {
            if (level.height === newQuality) {
              hls.current.currentLevel = levelIndex;
            }
          });
        },
      };
      setPlyrOptions({ ...plyrOptions, quality });
      hasQuality.current = true;
    });
  });
  return { options: plyrOptions };
};
const CustomPlyrInstance = React.forwardRef<
  APITypes,
  PlyrProps & { hlsSource?: string }
>((props, ref) => {
  const { source, options = null, hlsSource } = props;
  const raptorRef = usePlyr(ref, {
    ...useHls(hlsSource as string, options),
    source,
  });
  return <video ref={raptorRef} className="plyr-react plyr" />;
});
CustomPlyrInstance.displayName = 'CustomPlyrInstance';
const videoOptions = {
  autoPlay: true,
  controls: [
    'rewind',
    'play-large',
    'play',
    'fast-forward',
    'progress',
    'mute',
    'current-time',
    'duration',
    'volume',
    'settings',
    'airplay',
    'fullscreen',
  ],
  invertTime: true,
  playsInline: true,
};
const videoSource = null;

type PlyrComponentProps = {
  src: string;
};

const PlyrComponent: React.FC<PlyrComponentProps> = ({ src }) => {
  const ref = useRef<APITypes>(null);
  const supported = Hls.isSupported();

  return (
    <div className="relative h-full w-full">
      {supported ? (
        <CustomPlyrInstance
          ref={ref}
          options={videoOptions}
          hlsSource={`https://corsanimehi.onrender.com/${src}`}
          source={videoSource}
        />
      ) : (
        'HLS is not supported in your browser'
      )}
    </div>
  );
};
export default React.memo(PlyrComponent);
