import { ISources } from '@/store/watch';
import { proxyUrl } from './utils/proxy';

export const sourceUrlToName = (url: string) => {
  return url.includes('gogoanime') ? 'Gogoanime' : 'Zoro';
};

export const extractUrl = (urlArray?: ISources, zoroUrl?: string) => {
  const videoLink = urlArray?.sources?.find(src => src.quality === 'default')
    ?.url
    ? urlArray?.sources?.find(src => src.quality === 'default')?.url
    : urlArray?.sources?.find(src => src.quality === 'auto')?.url;

  const referer = urlArray?.headers?.Referer
    ? urlArray?.headers?.Referer
    : `https://zoro.to/${zoroUrl}`;

  // return proxyUrl(videoLink as string, referer);
  return videoLink;
};
