export function isValidDateString(s: string): boolean {
  return /^\d\d\/\d\d\/\d\d\d\d$/.test(s);
}

export function isValidIntString(s: string): boolean {
  return /^\d+$/.test(s);
}
