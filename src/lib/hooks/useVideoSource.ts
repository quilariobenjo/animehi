import { CONSUMET_URL, ENIME_URL } from '../constant';
import useSWR from 'swr';
import { useMemo } from 'react';

type VideoSourceProps = {
  episodeId: string;
  provider: string;
};

const useVideoSource = ({
  episodeId,
  provider,
}: {
  episodeId: string;
  provider: string;
}) => {
  const fetcher = async (url: string) => fetch(url).then(res => res.json());

  const { data, error } = useSWR(
    `${CONSUMET_URL}/meta/anilist/watch${episodeId}?provider=${provider}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useVideoSource;
