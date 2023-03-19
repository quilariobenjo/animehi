import { ENIME_URL } from '../constant';
import useSWR from 'swr';

const useEpisodes = ({
  slug,
  episodeNumber,
}: {
  slug: string;
  episodeNumber: string;
}) => {
  const fetcher = async (url: string) => fetch(url).then(res => res.json());

  const { data, error } = useSWR(
    `${ENIME_URL}/view/${slug}/${episodeNumber}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    isLoading: !data && !error,
  };
};

export default useEpisodes;
