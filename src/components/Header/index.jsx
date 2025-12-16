
'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Button from '../Button';

const Header = () => {
  const { t, i18n } = useTranslation();
  
  // تحديد اتجاه الصفحة بناءً على اللغة
  const isRTL = i18n.language === 'ar';

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Container className="flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label={t('header_logo_alt')}>
            {/* استخدام الشعار المناسب للغة */}
            <img 
              src={`/assets/logos/logo-full-color.${i18n.language}.svg`} 
              alt={t('header_logo_alt')} 
              className="h-8 w-auto" // المواصفات: min height 40px (h-10) لكن 32px (h-8) شائع، سنلتزم بالملف min 40px
              style={{ minHeight: '40px' }}
            />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-8" role="navigation">
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            {t('nav_link_0')}
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            {t('nav_link_1')}
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            {t('nav_link_2')}
          </Link>
        </nav>

        {/* CTA Button & Language Switcher (Optional helper) */}
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" onClick={() => console.log('Login clicked')}>
            {t('header_cta')}
          </Button>
          
          {/* محول لغة بسيط مؤقت للتجربة */}
          <button 
            onClick={() => i18n.changeLanguage(isRTL ? 'en' : 'ar')}
            className="text-xs font-bold text-gray-500 uppercase hover:text-primary"
          >
            {isRTL ? 'EN' : 'AR'}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
