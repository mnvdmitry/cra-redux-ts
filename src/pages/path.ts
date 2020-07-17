const pathsMap = {
  home: () => '/'
};

type PathsMap = typeof pathsMap;

function getPath<TRoute extends keyof PathsMap>(
  route: TRoute,
  ...params: Parameters<PathsMap[TRoute]>
) {
  let path: (...args: Parameters<PathsMap[TRoute]>) => string = pathsMap[route];

  return path(...params);
}

export { getPath };
