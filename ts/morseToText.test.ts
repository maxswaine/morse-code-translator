import { morseCodeMapping } from "./morse";
import { morseToText } from "./morseToText";
import { textToMorse } from "./textToMorse";

describe("textToMorse", () => {
  it("should convert a single letter to morse code", () => {
    const result = textToMorse("h");
    expect(result).toBe("....");
  });
});
