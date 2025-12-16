
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../Container';
import Button from '../Button';

const Hero = ({ 
  variant = 'with_video', // 'with_video' | 'with_image'
  backgroundMedia,
  headline,
  subheadline,
  ctaText
}) => {
  const { t, i18n } = useTranslation();

  // تحديد مسار الوسائط الافتراضي بناءً على اللغة (للأصول المترجمة)
  const lang = i18n.language;
  
  // القيم الافتراضية من ملفات الترجمة إذا لم يتم تمرير خصائص (props)
  const content = {
    headline: headline || t('hero_headline'),
    subheadline: subheadline || t('hero_subheadline'),
    cta: ctaText || t('hero_cta'),
    bgAlt: t('hero_background_alt')
  };

  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden bg-gray-900" aria-label="Hero Section">
      
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        {variant === 'with_video' ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={`/landing-page-template/assets/hero/hero-placeholder-16x9.jpg`} // Fallback poster
          >
            <source src={`/landing-page-template/assets/hero/hero-video.${lang}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={`/landing-page-template/assets/hero/hero-background.${lang}.jpg`} 
            alt={content.bgAlt}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 2. Content Layer */}
      <Container className="relative z-10 text-center flex flex-col items-center gap-6">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
          {content.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
          {content.subheadline}
        </p>
        
        <div className="mt-4">
          <Button size="lg" variant="primary">
            {content.cta}
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default Hero;
