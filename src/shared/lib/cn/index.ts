type Mods = Record<string, boolean | string>

export const cn = (
  classes: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  return [
    classes,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([name]) => name)
  ]
    .join(' ');
}
