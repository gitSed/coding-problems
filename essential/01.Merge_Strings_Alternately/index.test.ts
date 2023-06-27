import mergeAlternately from "./index";

const testcase: Array<[string, string, string]> = [
  ["abc", "pqr", "apbqcr"],
  ["pqr", "ab", "paqbr"],
  ["ab", "pqrs", "apbqrs"],
  ["pqrs", "abcd", "paqbrcsd"],
  ["abcd", "pq", "apbqcd"],
  ["", "ab", "ab"],
  ["cd", "", "cd"],
  ["", "", ""],
];

describe("Merge Strings Alternately", () => {
  test.each(testcase)(
    "mergeAlternately('%s', '%s') should return '%s'",
    (word1, word2, output) => {
      expect(mergeAlternately(word1, word2)).toBe(output);
    }
  );
});
