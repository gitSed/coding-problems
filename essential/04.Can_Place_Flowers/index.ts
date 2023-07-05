function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const availableSlots: Array<number> = [];

  for (let i = 0; i < flowerbed.length; i += 2) {
    if (flowerbed[i + 1] === 1) {
      i++;
      continue;
    }

    const isAvailable = flowerbed[i] === 0;
    const hasAdjacentFlower = flowerbed[i - 1] === 1 || flowerbed[i + 1] === 1;

    if (isAvailable && !hasAdjacentFlower) {
      availableSlots.push(i);
    }
  }

  return availableSlots.length >= n;
}

export default canPlaceFlowers;
