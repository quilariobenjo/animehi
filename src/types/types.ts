export interface RecentMedia {
  id: string;
  animeId: string;
  number: number;
  title: string;
  image: string;
  introStart: number;
  introEnd: number;
  filler: boolean;
  createdAt: Date;
  updatedAt: Date;
  airedAt: Date;
  titleVariations: {
    native: string;
    english: string;
  };
  description: string;
  anime: AnimeMedia;
  sources: Array<EpisodeSource>;
}

export interface AnimeMedia {
  id: string;
  slug: string;
  anilistId: number;
  coverImage: string;
  bannerImage: string;
  status: string;
  season: string;
  title: {
    native: string;
    romaji: string;
    english: string;
    userPreferred: string;
  };
  mappings: {
    mal: number;
    anidb: number;
    kitsu: number;
    anilist: number;
    thetvdb: number;
    anisearch: number;
    livechart: number;
    'notify.moe': string;
    'anime-planet': string;
  };
  currentEpisode: number;
  next: Date;
  synonyms: string[];
  countryOfOrigin: string;
  lastEpisodeUpdate: string;
  seasonInt: number;
  description: string;
  duration: number;
  averageScore: number;
  popularity: number;
  color: string;
  year: number;
  createdAt: Date;
  updatedAt: Date;
  format: string;
  lastChecks: {};
  genre: string[];
}

interface EpisodeSource {
  id: string;
  website: string;
  url: string;
  priority: number;
  subtitle: boolean;
}

export interface EnimeSources {
  id: string;
  target: string;
  priority: number;
  url: string;
}

export interface EpisodesSource {
  id: string;
  animeId: string;
  number: number;
  title: string;
  image: string;
  introStart: null;
  introEnd: null;
  filler: null;
  createdAt: string;
  updatedAt: string;
  airedAt: string;
  titleVariations: {
    native: string;
    english: string;
  };
  description: string;
}
