import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import ptBr from "./locales/ptBr";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: en,
    ptBr: ptBr,
  },
  fallbackLng: "ptBr",
  debug: false,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;