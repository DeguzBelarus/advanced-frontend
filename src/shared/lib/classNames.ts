type ClassModsType = Record<string, boolean | string>;

export function classNames(
  mainClass: string,
  additional: string[] = [],
  mods: ClassModsType = {},
): string {
  const classModifications = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key);
  return [mainClass, ...additional, ...classModifications].join(' ');
}
