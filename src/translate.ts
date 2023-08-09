import { morseCodeMapping } from "./morse";


export const translateIntoMorse = (input: string): string[] => {
    const textArray: string[] = input.toLowerCase().split("");
    const morseArray: string[] = textArray.map(letter => morseCodeMapping[letter] || "");
    return morseArray;
  }
