import React from 'react';
import { Award, Users, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import  imghero  from '../assest/hero.jpg'; 

const About: React.FC = () => {
  const { t } = useLanguage();

  const certifications = [
    { key: 'cert1', icon: Award },
    { key: 'cert11', icon: Award },
    { key: 'cert12', icon: Award },
    { key: 'cert2', icon: Users },
    { key: 'cert3', icon: Target },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutText')}
            </p>
            
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('certifications')}
              </h3>
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={cert.key} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{t(cert.key)}</span>
                  </div>

                );
              })}
            </div>
            
          </div>
          

          {/* Image */}
          <div className="order-1 lg:order-2" id='hero2'>
            <div className="relative">
              <img
                src= {imghero}
                alt="Coach Mostafa"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;