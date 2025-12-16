
'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Joi from 'joi';
import Button from '../Button';
import Alert from '../Alert';

const Form = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    companyName: '',
    phone: '',
    jobTitle: '',
    companySize: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); 

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().label(t('form_field_label_0')),
    fullName: Joi.string().min(2).max(50).required().label(t('form_field_label_1')),
    companyName: Joi.string().min(2).required().label(t('form_field_label_2')),
    phone: Joi.string().min(8).required().label(t('form_field_label_3')),
    jobTitle: Joi.string().allow('').label(t('form_field_label_4')),
    companySize: Joi.string().allow('').label(t('form_field_label_5'))
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});

    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      const newErrors = {};
      error.details.forEach(detail => {
        newErrors[detail.path[0]] = detail.message;
      });
      setErrors(newErrors);
      setStatus('idle');
      return;
    }

    try {
      // إرسال البيانات فعلياً إلى Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "025d9d7a-ee19-447e-8636-e7a7491103cc", 
          ...formData
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ email: '', fullName: '', companyName: '', phone: '', jobTitle: '', companySize: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const fields = [
    { name: 'email', type: 'email', index: 0, required: true },
    { name: 'fullName', type: 'text', index: 1, required: true },
    { name: 'companyName', type: 'text', index: 2, required: true },
    { name: 'phone', type: 'tel', index: 3, required: true },
    { name: 'jobTitle', type: 'text', index: 4, required: false },
    { name: 'companySize', type: 'text', index: 5, required: false },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('form_heading')}</h3>
        <p className="text-gray-500">{t('form_subheadline')}</p>
      </div>

      {status === 'success' && (
        <Alert type="success" className="mb-6">
          Thank you! We have received your request.
        </Alert>
      )}
      
      {status === 'error' && (
        <Alert type="error" className="mb-6">
          Something went wrong. Please try again.
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
              {t(`form_field_label_${field.index}`)} 
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={t(`form_field_placeholder_${field.index}`)}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${errors[field.name] ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
            />
            {errors[field.name] && (
              <p className="mt-1 text-xs text-red-600">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <Button 
          type="submit" 
          className="w-full mt-4" 
          size="lg"
          disabled={status === 'submitting' || status === 'success'}
        >
          {status === 'submitting' ? 'Processing...' : t('form_submit_button')}
        </Button>
        <p className="text-xs text-center text-gray-400 mt-4">
          {t('form_privacy_notice')}
        </p>
      </form>
    </div>
  );
};

export default Form;
