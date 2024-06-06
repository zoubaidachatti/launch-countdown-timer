export const openExternalLink = (link: string, newTab?: boolean) => {
  window.open(link, newTab ? '_blank' : undefined);
};
