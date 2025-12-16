
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

const Testimonial = ({ 
  index = 0, 
  variant = 'card', // 'card' | 'simple' | 'with_avatar'
  quote,
  authorName,
  authorTitle,
  avatarSrc
}) => {
  const { t, i18n } = useTranslation();
  
  // جلب البيانات من ملفات الترجمة
  const content = {
    quote: quote || t(`testimonial_quote_${index}`),
    author: authorName || t(`testimonial_author_${index}`),
    title: authorTitle || t(`testimonial_author_title_${index}`),
    avatarAlt: t(`testimonial_avatar_alt_${index}`)
  };

  // مسار الصورة الافتراضي
  const avatarPath = avatarSrc || `/landing-page-template/assets/avatars/avatar-${index}.${i18n.language}.jpg`;

  // تنسيقات الحاوية
  const containerClasses = clsx(
    "flex flex-col gap-4 transition-all duration-300",
    {
      "p-6 bg-white rounded-2xl shadow-sm border border-gray-100": variant === 'card',
      "text-center items-center": variant === 'simple',
      "flex-row items-center text-left": variant === 'with_avatar' && i18n.language !== 'ar', // LTR
      "flex-row-reverse items-center text-right": variant === 'with_avatar' && i18n.language === 'ar', // RTL logic
    }
  );

  return (
    <div className={containerClasses}>
      
      {/* Quote Section */}
      <div className={clsx("flex-1", { "order-2": variant === 'with_avatar' })}>
        {/* SVG Quote Icon for decoration */}
        <svg className="w-8 h-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.624-9.024L25.864 4z" />
        </svg>
        
        <blockquote className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
          "{content.quote}"
        </blockquote>
      </div>

      {/* Author Info Section */}
      <div className={clsx("flex items-center gap-4 mt-4", { "order-1": variant === 'with_avatar' })}>
        
        {/* Avatar */}
        <div className="relative shrink-0">
          <img 
            src={avatarPath}
            alt={content.avatarAlt}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/landing-page-template/assets/placeholders/avatar-placeholder-0.jpg'; // Fallback per spec
            }}
          />
        </div>

        {/* Text Details */}
        <div>
          <div className="font-bold text-gray-900">{content.author}</div>
          {content.title && (
            <div className="text-sm text-gray-500">{content.title}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
