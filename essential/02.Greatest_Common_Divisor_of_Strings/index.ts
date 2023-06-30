function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";
  if (str1.length === 0 || str2.length === 0) return "";

  const gcd = (a: number, b: number): number => {
    if (b === 0) return a;

    return gcd(b, a % b);
  };

  return str1.slice(0, gcd(str1.length, str2.length));
}

export default gcdOfStrings;
