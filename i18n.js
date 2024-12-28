import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Carregar arquivos externos de tradução
  .use(LanguageDetector) // Detectar idioma do navegador
  .use(initReactI18next) // Integração com React
  .init({
    fallbackLng: 'en', // Idioma padrão
    debug: true, // Ative para depurar
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Caminho dos arquivos de tradução
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18n;
