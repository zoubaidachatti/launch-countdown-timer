export function generateRandomNumber(from = 0, to = 100): number {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export function isNumeric(str: string): boolean {
  return !isNaN(Number(str));
}

export function generateUniqueIds(arrayLength: number, from = 0, to = 100): number[] {
  if (arrayLength < 0) {
    throw new Error('arrayLength must be greater than or equal to 0');
  }

  const generatedIds: Set<number> = new Set();

  while (generatedIds.size < arrayLength) {
    const id = generateRandomNumber(from, to);
    generatedIds.add(id);
  }

  return Array.from(generatedIds);
}

export function formatNumber(num: number): string {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return num.toString();
  }
}
