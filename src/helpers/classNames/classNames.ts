type ClassModsType = Record<string, boolean | string>;

export function classNames(mainClass: string, additional: Array<string>, mods?: ClassModsType): string {
  const classModifications = Object.entries(mods || {}).length ? Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key)
    .join(' ') : '';
  return [
    mainClass,
    ...additional,
    classModifications
  ].join(' ').trim();
};
