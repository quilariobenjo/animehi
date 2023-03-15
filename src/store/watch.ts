import { create } from 'zustand';

interface ISource {
  url: string;
  isM3U8: boolean;
  quality: string;
}

interface ISubtitles {
  url: string;
  lang: string;
}

interface ISources {
  headers?: {
    Referer: string;
  };
  sources?: Array<ISource>;
  subtitles?: Array<ISubtitles>;
  intro?: {
    start: number;
    end: number;
  };
  download?: string;
}

interface InitialState {
  serverName?: string;
  setServerName?: (serverName: string) => void;
  animeId?: string;
  setAnimeId?: (animeId: string) => void;
  videoLink?: string;
  setVideoLink?: (link: string) => void;
  source: ISources;
  setSources: (source: ISource[]) => void;
  resetSources: () => void;
}

const initialState = {
  sources: [],
};

const useWatchStore = create<InitialState>(set => ({
  source: initialState,
  setSources: (source: ISource[]) =>
    set(state => ({
      sources: source,
      videoLink: source?.find(src => src.quality === 'default')?.url,
    })),

  resetSources: () => {
    set({
      source: initialState,
      videoLink: '',
    });
  },
}));

export default useWatchStore;
