import React from 'react';
import { Scale, Dumbbell, Zap, Apple } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scale,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Dumbbell,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Zap,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Apple,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6 group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;