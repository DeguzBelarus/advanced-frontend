type ClassModsType = Record<string, boolean | string>;

export function classNames(
  mainClass: string,
  additionalClasses: string[] = [],
  dynamicalClasses: ClassModsType = {},
): string {
  const classModifications = Object.entries(dynamicalClasses)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key);
  return [mainClass, ...additionalClasses, ...classModifications].join(' ');
}
