import reverseVowels from "./index";

const testcase: Array<[string, string]> = [
  ["hello", "holle"],
  ["leetcode", "leotcede"],
  ["aA", "Aa"],
  ["a", "a"],
  ["ae", "ea"],
  ["aei", "iea"],
  ["aeiou", "uoiea"],
  ["a.", "a."],
  ["big house", "beg huosi"],
];

describe("Reverse Vowels of a String", () => {
  test.each(testcase)("reverseVowels(%p) should return %p", (input, output) => {
    expect(reverseVowels(input)).toBe(output);
  });
});
