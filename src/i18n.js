import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslations from "./assets/locale/en/translations.json";
import spanishTranslations from "./assets/locale/es/translations.json";

const resources = {
  en: { translation: englishTranslations },
  es: { translation: spanishTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
