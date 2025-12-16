
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(initReactI18next)
  .use(resourcesToBackend((language, namespace, callback) => {
    import(`../../public/locales/${language}.json`)
      .then((resources) => {
        callback(null, resources);
      })
      .catch((error) => {
        callback(error, null);
      });
  }))
  .init({
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false, // React يقوم بذلك تلقائياً
    },
    react: {
      useSuspense: false // لتجنب مشاكل التحميل في SSR البسيط
    }
  });

export default i18n;
