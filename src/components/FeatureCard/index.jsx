
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

const FeatureCard = ({ 
  index = 0, 
  variant = 'icon_top', // 'icon_top' | 'icon_left' | 'icon_only'
  title, 
  description, 
  iconSrc 
}) => {
  const { t, i18n } = useTranslation();
  
  // جلب البيانات من ملفات الترجمة باستخدام الفهرس (index) إذا لم يتم تمرير نصوص
  const content = {
    title: title || t(`feature_title_${index}`),
    description: description || t(`feature_desc_${index}`),
    iconAlt: t(`feature_icon_alt_${index}`)
  };

  // تحديد مسار الأيقونة الافتراضي
  const iconPath = iconSrc || `/assets/icons/feature-icon-${index}.${i18n.language}.svg`;

  // تنسيقات الحاوية بناءً على المتغير (Variant)
  const containerClasses = clsx(
    "p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300",
    {
      "flex flex-col items-start text-left": variant === 'icon_top',
      "flex flex-row items-start gap-4 text-left": variant === 'icon_left',
      "flex justify-center items-center": variant === 'icon_only',
    }
  );

  return (
    <div className={containerClasses}>
      {/* Icon Section */}
      <div className={clsx("flex-shrink-0 mb-4", { "mb-0": variant === 'icon_left' })}>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-primary">
          {/* نستخدم img هنا للتبسيط، في الإنتاج يفضل استخدام next/image أو SVG مباشر */}
          <img 
            src={iconPath} 
            alt={content.iconAlt} 
            className="w-6 h-6"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/assets/placeholders/logo-full-color-placeholder.svg'; // Fallback
            }}
          />
        </div>
      </div>

      {/* Text Content Section */}
      {variant !== 'icon_only' && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {content.title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm">
            {content.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
