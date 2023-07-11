import reverseWords from "./index";

const testcase: Array<[string, string]> = [
  ["the sky is blue", "blue is sky the"],
  ["  hello world!  ", "world! hello"],
  ["a good   example", "example good a"],
];

describe("Reverse Words in a String", () => {
  test.each(testcase)("reverseWords(%p) should return %p", (input, output) => {
    expect(reverseWords(input)).toBe(output);
  });
});
