import { morseCodeMapping } from "./morse";

export function morseToText(morseCode: string): string {
  const reverseMapping: { [key: string]: string } = {};
  for (const key in morseCodeMapping) {
    const value = morseCodeMapping[key];
    reverseMapping[value] = key;
  }

  const words = morseCode.trim().split(" / ");
  const decodedMessage: string[] = [];

  for (const word of words) {
    const characters = word.split(" ");
    const decodedWord = characters
      .map((char) => reverseMapping[char] || "?")
      .join("");
    decodedMessage.push(decodedWord);
  }

  return decodedMessage.join(" ");
}
