type ClassName = string | null | undefined | false;

export function cn(...args: ClassName[]): string {
  return args.reduce<string>((acc, cur) => {
    if (cur) return `${acc} ${cur}`;

    return acc;
  }, '');
}
