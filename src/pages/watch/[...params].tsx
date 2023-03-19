import React, { useMemo } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { CONSUMET_URL } from '@/lib/constant';
import { useRouter } from 'next/router';
import { AniMedia, EnimeEpisodes } from '@/types/types';
import BreadCrump from '@/components/watch/BreadCrump';
import Video from '@/components/watch/Video';
import Controls from '@/components/watch/Controls';
import Servers from '@/components/watch/Servers';
import Information from '@/components/watch/Information';
import Episodes from '@/components/watch/Episodes';
import Related from '@/components/watch/Related';
import Layout from '@/components/layout/Layout';
import { ENIME_URL } from '@/lib/constant';

const Watch = ({
  data,
  episodes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const { params } = router.query;
  const [animeId, slug, episodeNumber] = params as string[];

  const currentEpisode = useMemo(
    () =>
      episodes?.anime?.episodes.find(
        episode => episode.number === Number(episodeNumber)
      ),
    [episodeNumber, episodes]
  );

  const currentEpisodeIndex = useMemo(
    () =>
      episodes?.anime?.episodes.findIndex(
        episode => episode.number === Number(episodeNumber)
      ),
    [episodes, episodeNumber]
  );

  const nextEpisode = useMemo(
    () => episodes.anime.episodes[currentEpisodeIndex + 1],
    [episodes, currentEpisodeIndex]
  );

  const prevEpisode = useMemo(
    () => episodes.anime.episodes[currentEpisodeIndex - 1],
    [episodes, currentEpisodeIndex]
  );

  return (
    <Layout>
      <main className="mt-[54px] md:mt-[58px] 2xl:mt-[62px]">
        <div className="relative min-h-[calc(100_-_490px)]">
          <div className="relative flex w-full max-w-full flex-col justify-between space-y-2 px-3 md:flex-col md:space-x-2 lg:flex-row">
            <section className="w-full lg:w-[73%]">
              <BreadCrump />
              <div className="block w-full">
                <div>
                  <div className="relative w-full overflow-hidden bg-black  pb-[56.25%]">
                    <Video
                      cover={data.cover}
                      poster={currentEpisode?.image || ''}
                      episodeSources={episodes?.sources}
                    />
                  </div>
                </div>
              </div>
              <Controls
                totalEpisodes={data?.currentEpisode || 1}
                currentEpisodeNumber={Number(episodeNumber)}
                anilistId={animeId}
                slug={slug}
                prevEpisode={prevEpisode}
                nextEpisode={nextEpisode}
              />
              <div className="flex w-full flex-col md:flex-row">
                <div className="mt-2 w-full">
                  <Servers
                    episodeNumber={episodeNumber}
                    currentEpisodeTitle={
                      data.title.english || data.title.romaji || ''
                    }
                  />
                  <Information data={data} />
                </div>
              </div>
            </section>
            <aside className="w-full px-0 pr-2 md:px-4 lg:w-[27%] lg:pr-4 lg:pl-0">
              <div className="block w-full">
                <div>
                  <div className="relative w-full pb-[720px]">
                    <Episodes
                      coverImage={episodes?.anime.coverImage}
                      episodes={episodes?.anime.episodes}
                      animeTitle={data.title.english || data.title.romaji || ''}
                      anilistId={animeId}
                      slug={slug}
                      duration={data.duration || 24}
                      totalEpisodes={data?.currentEpisode}
                    />
                  </div>
                </div>
              </div>
              <Related />
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: AniMedia;
  episodes: EnimeEpisodes;
}> = async ({ params }) => {
  const data: AniMedia = await (
    await fetch(`${CONSUMET_URL}/meta/anilist/data/${params?.params?.[0]}`)
  ).json();

  const episodes: EnimeEpisodes = await (
    await fetch(
      `${ENIME_URL}/view/${params?.params?.[1]}/${params?.params?.[2]}`
    )
  ).json();

  if (!data && !episodes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      episodes,
    },
  };
};

export default Watch;
