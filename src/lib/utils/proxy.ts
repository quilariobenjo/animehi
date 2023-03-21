export const proxyUrl = (url: string, referer: string) => {
  return `/api/video/proxy?src=${url}&referer=${referer}`;
};
