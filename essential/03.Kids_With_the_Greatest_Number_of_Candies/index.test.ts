import kidsWithCandies from "./index";

const testcase: Array<[number[], number, boolean[]]> = [
  [[2, 3, 5, 1, 3], 3, [true, true, true, false, true]],
  [[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
  [[12, 1, 12], 10, [true, false, true]],
];

describe("Kids With the Greatest Number of Candies", () => {
  test.each(testcase)(
    "kidsWithCandies(%p, %p) should return %p",
    (candies, extraCandies, output) => {
      expect(kidsWithCandies(candies, extraCandies)).toStrictEqual(output);
    }
  );
});
