const translations = {};

async function loadTranslations(language) {
  try {
    const response = await fetch(`./translations/${language}.json`);
    const data = await response.json();
    translations[language] = data;
  } catch (error) {
    console.error(`Error loading ${language} translations:`, error);
  }
}

export { translations, loadTranslations };
