import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEn from '@/public/locales/en/translation.json';
import translationRu from '@/public/locales/ru/translation.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEn,
        },
        ru: {
            translation: translationRu,
        },
    },
    debug: false,
    fallbackLng: "ru",
    returnObjects: true,
})