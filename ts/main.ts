import "../src/main.scss";
import { textToMorse } from "./textToMorse";
import { morseToText } from "./morseToText";

const morseInput = document.querySelector(".morse__input") as HTMLInputElement;
const morseOutput = document.querySelector(".morse__output") as HTMLElement;
const conversionSelect = document.querySelector("#conversionSelect");

if (!morseInput) {
  throw new Error("Issue with input");
}

if (!morseOutput) {
  throw new Error("Issue with output");
}
if (!conversionSelect) {
  throw new Error("Issue with conversion");
}

const displayMorseCode = (text: string) => {
  const morseArray = textToMorse(text);
  const morseText = morseArray.join(" ");
  morseOutput.innerHTML = "";
  const template = `<p>${morseText}</p>`;
  morseOutput.innerHTML = template;
};

const displayText = (morse: string) => {
  const text = morseToText(morse);
  morseOutput.innerHTML = "";
  const template = `<p>${text}</p>`;
  morseOutput.innerHTML = template;
};

const convertTextToMorse = () => {
  const text = morseInput.value;
  displayMorseCode(text);
};

const convertMorseToText = () => {
  const morse = morseInput.value;
  displayText(morse);
};

morseInput.addEventListener("input", (event: Event) => {
  const text = (event.target as HTMLInputElement).value;
  displayMorseCode(text);
});


conversionSelect.addEventListener("change", (event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;

  if (selectedValue === "textToMorse") {
    morseInput.removeEventListener("input", convertMorseToText);
    morseInput.addEventListener("input", convertTextToMorse);
  } else if (selectedValue === "morseToText") {
    morseInput.removeEventListener("input", convertTextToMorse);
    morseInput.addEventListener("input", convertMorseToText);
  }
});
