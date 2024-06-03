import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    dashboard: {
      title: 'Title',
      titleHint: 'Please, provide a title for your content.',
      description: 'Description',
      descriptionPlaceholder:
        'Write about ReactJS form validation. Provide a real life examples',
      descriptionHint: 'Please, provide a description for your content.',
      generate: 'Generate',
      profile: 'Profile',
      logout: 'Logout',
    },
  },
  uz: {
    dashboard: {
      title: 'Sarlavha',
      titleHint: 'Iltimos, kontent uchun sarlavha kiriting.',
      description: 'Tavsifi',
      descriptionPlaceholder:
        'ReactJS form validatsiyasi haqida yozing. Amaliy misollar taqdim eting',
      descriptionHint: 'Iltimos, kontent tavsifini yozing',
      generate: 'Yaratish',
      profile: 'Sahifa',
      logout: 'Chiqish',
    },
  },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage'],
    },
  });

export default i18n;
