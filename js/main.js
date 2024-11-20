const { translations, loadTranslations } = require('./translations.js');

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

document.addEventListener("DOMContentLoaded", async function () {
  const language = getPreferredLanguage();
  await loadTranslations(language);
  setTextContent(language);

  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");
  const languageButton = document.getElementById("languageButton");

  let questionIndex = 0;

  yesButton.addEventListener("click", function () {
    responseMessage.innerText = translations[language].responseMessage;
    noButton.style.display = "none";
  });

  noButton.addEventListener("click", function () {
    noButton.innerText = translations[language].questions[questionIndex];
    questionIndex = (questionIndex + 1) % translations[language].questions.length;
  });

  languageButton.addEventListener("click", async function () {
    const currentLanguage = languageButton.getAttribute("data-language");
    const newLanguage = currentLanguage === "en" ? "th" : "en";
    languageButton.setAttribute("data-language", newLanguage);
    await loadTranslations(newLanguage);
    setTextContent(newLanguage);
  });
});
