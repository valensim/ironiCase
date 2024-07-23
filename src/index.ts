export function ironic(serious: string): string {
  let upper = false;
  return Array.from(serious.toLowerCase()).map((char: string) => {
    if (upper) {
      upper = false;
      return char.toUpperCase();
    } else {
      upper = true;
      return char;
    }
  }).join('');
}
