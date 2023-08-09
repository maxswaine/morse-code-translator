import "./styles/main.scss";
import { textToMorse } from "./textToMorse";
import { morseToText } from "./morseToText";

const morseInput = document.querySelector(".morse__input") as HTMLInputElement;
const morseOutput = document.querySelector(".morse__output") as HTMLElement;

if (!morseInput) {
  throw new Error("Issue with input");
}

if (!morseOutput) {
  throw new Error("Issue with output");
}



const displayMorseCode = (text: string) => {
  const morseArray = textToMorse(text);
  const morseText = morseArray.join(" ");
  morseOutput.innerHTML = "";
  const template = `<p>${morseText}</p>`;
  morseOutput.innerHTML = template;
};

morseInput.addEventListener("input", (event: Event) => {
  const text = (event.target as HTMLInputElement).value;
  displayMorseCode(text);
});
