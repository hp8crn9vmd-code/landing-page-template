
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../Container';

const SocialProof = () => {
  const { t } = useTranslation();

  // مصفوفة لتوليد 6 شعارات (0 إلى 5) حسب المواصفات الشائعة
  const logos = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section className="py-12 border-b border-gray-100 bg-white" aria-labelledby="social-proof-heading">
      <Container>
        
        {/* Heading */}
        <p 
          id="social-proof-heading" 
          className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
        >
          {t('social_proof_heading')}
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((index) => (
            <div key={index} className="w-32 h-12 relative flex items-center justify-center">
              {/* في الواقع سنستخدم الصور، لكن هنا نستخدم Placeholder SVG
                لضمان عدم ظهور صور مكسورة في العرض التجريبي
              */}
              <img
                src={`/assets/clients/client-logo-${index}.png`}
                alt={t(`client_logo_alt_${index}`)}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  // SVG Placeholder بسيط جداً عند عدم وجود الصورة
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Crect x='2' y='2' width='96' height='26' rx='4'/%3E%3Cpath d='M30 15h40'/%3E%3C/svg%3E";
                }}
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default SocialProof;
