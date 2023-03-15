import Popular from '@/components/anime/popular';
import BreadCrump from '@/components/watch/BreadCrump';
import Controls from '@/components/watch/Controls';
import Episodes from '@/components/watch/Episodes';
import Servers from '@/components/watch/Servers';
import Video from '@/components/watch/Video';
import { CONSUMET_URL, ENIME_URL } from '@/lib/constant';
import React from 'react';

type Params = {
  params: {
    params: string[];
  };
};

async function getEpisodes(slug: string, episodeNumber: string) {
  const res = await fetch(ENIME_URL + `/view/${slug}/${episodeNumber}`, {
    next: { revalidate: 2600 },
  });

  return res.json();
}

async function getAnimeMedia(anilistId: string) {
  const res = await fetch(`${CONSUMET_URL}/meta/anilist/data/${anilistId}`, {
    next: { revalidate: 2600 },
  });
  return res.json();
}

export default async function Watch({ params: { params } }: Params) {
  const [id, slug, episodeNumber] = params as string[];

  if (!id || !slug || !episodeNumber) return <></>;

  const episodes = await getEpisodes(slug, episodeNumber);
  const anime = await getAnimeMedia(id);

  return (
    <main className="mt-[54px] md:mt-[58px] 2xl:mt-[62px]">
      <div className="relative min-h-[calc(100_-_490px)]">
        <div className="relative flex w-full max-w-full justify-between space-y-2 px-3 md:flex-col md:space-x-2 lg:flex-row">
          <section className="w-full lg:w-[73%]">
            <BreadCrump />
            <div className="block w-full">
              <div>
                <div className="relative w-full overflow-hidden bg-black  pb-[56.25%]">
                  <Video episodeSources={episodes.sources} />
                </div>
              </div>
            </div>
            <Controls />
            <div className="flex w-full">
              <Servers />
              <Episodes
                episodes={episodes.anime.episodes}
                animeTitle={anime.title.english}
                anilistId={id}
                slug={slug}
                duration={anime.duration}
              />
            </div>
          </section>
          <aside className="w-full px-4 lg:w-[27%] lg:pr-4 lg:pl-0">
            <Popular />
          </aside>
        </div>
      </div>
    </main>
  );
}
