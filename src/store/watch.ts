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
  videoLink: string;
  setVideoLink?: (link: string) => void;
  source: ISources;
  setSources: (source: ISource[]) => void;
  sourceIndex: number;
  setSourceIndex: (sourceIndex: number) => void;
  resetSources: () => void;
  provider: string;
  setProvider: (provider: string) => void;
  download: string;
  setDownload: (download: string) => void;
}

const initialState = {
  sources: [],
};

const useWatchStore = create<InitialState>(set => ({
  source: initialState,
  sourceIndex: 0,
  provider: 'gogoanime',
  setProvider: (provider: string) => set({ provider }),
  setSourceIndex: (sourceIndex: number) => set({ sourceIndex }),
  download: '',
  videoLink: 'https://cdn.plyr.io/static/blank.mp4',
  setDownload: (download: string) => set({ download }),
  setSources: (source: ISource[]) =>
    set({
      videoLink:
        source?.find(src => src.quality === 'default')?.url ||
        source?.find(src => src.quality === 'auto')?.url,
    }),
  resetSources: () => {
    set({
      source: initialState,
      videoLink: '',
    });
  },
}));

export default useWatchStore;
