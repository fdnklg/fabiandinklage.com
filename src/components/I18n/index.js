import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'de'];

// Dictionary of translations
const translations = {
  en: {
    about: {
      intro: "Hi I'm Fabian Dinklage, a freelance **data visualization** and **information designer** based in Berlin. I design interfaces and craft interactive **data-driven experiences** to help you understand your data."
    }
  },
  de: {
    about: {
      intro: "Hallo, ich bin Fabian Dinklage, ein freiberuflicher **Datenvisualisierer** und **Informationsdesigner** mit Sitz in Berlin. Ich entwerfe Interfaces und gestalte interaktive **datengesteuerte Erfahrungen**, die dir helfen, deine Daten zu verstehen."
    }
  }
}

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;