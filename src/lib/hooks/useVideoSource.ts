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
  const fetcher = async (episodeId: string) =>
    fetch(
      `${CONSUMET_URL}/meta/anilist/watch${episodeId}?provider=${provider}`
    ).then(res => res.json());

  const { data, error } = useSWR([episodeId], fetcher, {
    revalidateOnFocus: false,
  });

  return {
    sources: data?.sources,
    referer: data?.headers?.Referer,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useVideoSource;
