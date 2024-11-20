import { translations } from './translations.js';

function getPreferredLanguage() {
  const language = navigator.language || navigator.userLanguage;
  return language.startsWith('th') ? 'th' : 'en';
}

function setTextContent(language) {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");
  const title = document.querySelector("h1");

  yesButton.innerText = translations[language].yesButton;
  noButton.innerText = translations[language].noButton;
  title.innerText = translations[language].title;
}

document.addEventListener("DOMContentLoaded", function () {
  const language = getPreferredLanguage();
  setTextContent(language);

  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");

  let questionIndex = 0;

  yesButton.addEventListener("click", function () {
    responseMessage.innerText = translations[language].responseMessage;
    noButton.style.display = "none";
  });

  noButton.addEventListener("click", function () {
    noButton.innerText = translations[language].questions[questionIndex];
    questionIndex = (questionIndex + 1) % translations[language].questions.length;
  });
});
