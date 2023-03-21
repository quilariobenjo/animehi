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
  anime: AnimeMedia;
  description: string;
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

export interface EnimeEpisodes {
  id: string;
  number: number;
  title: string;
  titleVariations: {
    native: string;
  };
  description: string;
  image: string;
  airedAt: string;
  createdAt: string;
  anime: EnimeAnime;
  sources: EnimeSources[];
}

export interface EnimeAnime {
  id: string;
  slug: string;
  title: Title;
  episodes: EpisodesSource[];
  genre: string[];
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
  bannerImage: string;
  coverImage: string;
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

export interface Title {
  romaji?: string;
  english?: string;
  native?: string;
  userPrefered?: string;
}

export interface NextAiringEpisode {
  airingTime: number;
  timeUntilAiring: number;
  episode: number;
}

export type AniSkip = {
  statusCode: number;
  results?: AniSkipResult[];
};

export type AniSkipResult = {
  interval: {
    startTime: number;
    endTime: number;
  };
  type: string;
};

export interface AniMedia {
  id: string;
  malId?: number;
  title: Title;
  synonyms?: string[];
  isLicensed?: boolean;
  isAdult?: boolean;
  countryOfOrigin?: string;
  image?: string;
  cover?: string;
  description?: string;
  status: string;
  releaseDate?: number;
  nextAiringEpisode?: NextAiringEpisode;
  totalEpisodes?: number;
  currentEpisode?: number;
  rating?: number;
  duration?: number;
  genres?: string[];
  studios?: string[];
  season?: string;
  popularity?: number;
  type?: string;
  startDate?: {
    year: number;
    month: number;
    day: number;
  };
  endDate?: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
}
