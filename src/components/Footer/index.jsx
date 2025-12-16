
'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Container from '../Container';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto" role="contentinfo">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={`/assets/logos/logo-full-color.${i18n.language}.svg`} 
              alt={t('footer_logo_alt')} 
              className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 transition-all"
            />
            <p className="text-sm text-gray-500">
              {t('footer_copyright').replace('2024', currentYear)}
            </p>
          </div>

          {/* Footer Links */}
          <nav className="flex gap-6" aria-label="Footer Navigation">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
              {t('footer_link_0')}
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">
              {t('footer_link_1')}
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-primary transition-colors">
              {t('footer_link_2')}
            </Link>
          </nav>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
