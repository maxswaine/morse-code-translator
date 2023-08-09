import { morseCodeMapping } from "./morse";
import { morseToText } from "./morseToText";
import { textToMorse } from "./textToMorse";

describe("textToMorse", () => {
  it("should convert a single letter to morse code", () => {
    const result: string[] = textToMorse("h");
    expect(result[0]).toBe("....");
  });

  it("should return whole words as morse code", () => {
    const result: string[] = textToMorse("Hello");
    expect(result.join("") === ".... . .-.. .-.. ---");
  });

  it("should return an array the same length as the original string length", () => {
    const result: string[] = textToMorse("hello");
    expect(result.length === 5);
  });

  it("should work with separate words", () => {
    const result = textToMorse("Hello my name is Max");
    expect(
      result.join("") ===
        ".... . .-.. .-.. --- / -- -.-- / -. .- -- . / .. ... / -- .- -..-"
    );
  });
});

describe("morseToText", () => {
  it("should return a letter when given morse code", () => {
    const result: string = morseToText("---");
    expect(result === "o");
  });

  it("Should be able to return whole strings of text", () => {
    const result = morseToText(".... . .-.. .-.. ---");
    expect(result === "HELLO");
  });

  it("should work with multiple words", () => {
    const result = morseToText(
      ".... . .-.. .-.. --- / -- -.-- / -. .- -- . / .. ... / -- .- -..-"
    );
    expect(result === "HELLO MY NAME IS MAX");
  });
});
