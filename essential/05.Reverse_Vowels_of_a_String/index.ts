const isVowel = (char: string): boolean => {
  const vowels = "aeiouAEIOU";

  return vowels.includes(char);
};

function reverseVowels(s: string): string {
  const stringArray = s.split("");
  const detections: Array<string> = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (isVowel(stringArray[i])) {
      detections.push(stringArray[i]);
    }
  }

  for (let i = 0; i < stringArray.length; i++) {
    if (isVowel(stringArray[i])) {
      const lastDetection = detections.pop();

      stringArray[i] = lastDetection;
    }
  }

  return stringArray.join("");
}

export default reverseVowels;
