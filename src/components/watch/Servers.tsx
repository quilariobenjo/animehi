'use client';
import { AiFillDatabase } from 'react-icons/ai';
import Button from '../shared/Button';
import { FiPlayCircle } from 'react-icons/fi';
import { EnimeSources, EpisodesSource } from '@/types/types';
import useWatchStore from '@/store/watch';
import classNames from 'classnames';

type ServersProps = {
  currentEpisodeTitle: string;
  episodeNumber: string;
};

const Servers: React.FC<ServersProps> = ({
  currentEpisodeTitle,
  episodeNumber,
}) => {
  const provider = useWatchStore(store => store.provider);

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
              <div
                className={classNames(
                  provider === 'gogoanime' ? 'bg-primary' : 'bg-[#1c1c1c]',
                  'flex items-center gap-1 rounded py-2 px-2 text-xs uppercase text-[#dddddd]'
                )}
              >
                <FiPlayCircle />
                GogoAnime
              </div>
              <div
                className={classNames(
                  provider === 'zoro' ? 'bg-primary' : 'bg-[#1c1c1c]',
                  'flex items-center gap-1 rounded py-2 px-2 text-xs uppercase text-[#dddddd]'
                )}
              >
                <FiPlayCircle />
                Zoro
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;
