import gcdOfStrings from "./index";

const testcase: Array<[string, string, string]> = [
  ["ABCABC", "ABC", "ABC"],
  ["ABABAB", "ABAB", "AB"],
  ["LEET", "CODE", ""],
  ["ABCDEF", "ABC", ""],
  ["ABCDEF", "ABCDEF", "ABCDEF"],
  ["ABCDEF", "ABCDEFABCDEF", "ABCDEF"],
  ["ABCDEFABCDEF", "ABCDEF", "ABCDEF"],
  ["ABC", "", ""],
  ["", "ABC", ""],
  ["", "", ""],
];

describe("Greatest Common Divisor of Strings", () => {
  test.each(testcase)(
    "gcdOfStrings(%p, %p) should return %p",
    (str1, str2, output) => {
      expect(gcdOfStrings(str1, str2)).toBe(output);
    }
  );
});
