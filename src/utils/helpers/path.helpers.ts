export const joinPaths = (paths: string[], isAlreadyPath?: boolean): string => {
  let joinedPath = '';
  for (const path of paths) {
    joinedPath += `${path}${!isAlreadyPath ? '/' : ''}`;
  }
  return joinedPath;
};

export const createPath = (path: string): string => {
  return `/${path}`;
};
