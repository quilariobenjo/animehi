'use client';
import { AiFillDatabase } from 'react-icons/ai';
import Button from '../shared/Button';
import { FiPlayCircle } from 'react-icons/fi';
import { EnimeSources, EpisodesSource } from '@/types/types';
import useWatchStore from '@/store/watch';

type ServersProps = {
  currentEpisodeTitle: string;
  episodeNumber: string;
};

const Servers: React.FC<ServersProps> = ({
  currentEpisodeTitle,
  episodeNumber,
}) => {
  const setSourceIndex = useWatchStore(store => store.setSourceIndex);
  const setProvider = useWatchStore(store => store.setProvider);

  const changeProvider = (index: number, provider: string) => {
    setSourceIndex(index);
    setProvider(provider);
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col justify-center bg-[#1c1c1c] p-4">
        <h5 className="text-xs text-[#dddddd]">
          You are watching Episode {episodeNumber}
        </h5>
        <p className="text-xs text-[#aaaaaa]">
          If the current provider doesn&apos;t work other provider below
        </p>
      </div>
      <div className="flex w-full flex-col bg-[#010101] py-4 px-3">
        <div className="py-2 px-3">
          <h4 className="text-sm text-[#dddddd] line-clamp-2">
            Episode {episodeNumber}: {currentEpisodeTitle}
          </h4>
        </div>
        <div className="py-2 px-4">
          <div className="flex items-center space-x-6">
            <AiFillDatabase className="text-white" />
            <div className="flex space-x-2">
              <Button
                // key={episodeSource.id}
                onClick={() => changeProvider(0, 'gogoanime')}
                type="button"
                className="flex py-2 items-center gap-1 rounded bg-primary px-2 text-xs uppercase text-[#dddddd]"
              >
                <FiPlayCircle />
                GogoAnime
              </Button>
	{/*
              <Button
                // key={episodeSource.id}
                // onClick={() => changeProvider(1, 'zoro')}
            disabled    
		type="button"
                className="flex py-2 items-center gap-1 rounded bg-primary px-2 text-xs uppercase text-[#dddddd]"
              >
                <FiPlayCircle />
                Zoro
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;
