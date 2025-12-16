
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/globals.css';
import '../utils/i18n'; // تهيئة i18n

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();

  // تحديث اتجاه الصفحة (RTL/LTR) عند تغيير اللغة
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <Component {...pageProps} />;
}

export default MyApp;
