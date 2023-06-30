function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const greatest = Math.max(...candies);

  return candies.map((kidCandies) => {
    return kidCandies + extraCandies >= greatest;
  });
}

export default kidsWithCandies;
