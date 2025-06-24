import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import imgtrans from '../assest/WhatsApp Image 2025-06-18 at 02.26.36_2fff6d31.jpg'; 

const Transformations: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Static transformation data that doesn't change with language
  const transformations = [
    {
      nameEn: 'Abdullah Fathy',
      nameAr: 'عبدالله فتحي',
      before: 'https://i.postimg.cc/fLwV29Kv/clint1-before.jpg',
      after: 'https://i.postimg.cc/rFzr25Ln/clint1-after.jpg',
      durationEn: '8 weeks',
      durationAr: '8 اسابيع',
    },
    {
      nameEn: ' Ahmed Abdel Rahman',
      nameAr: 'احمد عبد الرحمن ',
      before: 'https://i.postimg.cc/50hT4gj1/Whats-App-Image-2025-06-20-at-02-34-07-2e00b498.png',
      after: 'https://i.postimg.cc/k46LPzJf/Whats-App-Image-2025-06-20-at-02-34-07-2e00b498-1.png',
      durationEn:  '8 weeks',
      durationAr: '8 اسابيع',
    },
    {
      nameEn: ' Mohamed Ahmed',
      nameAr: 'محمد احمد',
      before: 'https://i.postimg.cc/0jjbx1hM/clint4-before.jpg',
      after: 'https://i.postimg.cc/fLBJ6RqQ/clint4-after.jpg',
      durationEn: '8 weeks',
      durationAr: '8 اسابيع',
    },
    {
      nameEn: ' Mahmoud Mohamed',
      nameAr: 'محمود محمد',
      before: 'https://i.postimg.cc/3JPdM61N/clint5-before.jpg',
      after: 'https://i.postimg.cc/HnNjkPCS/clint5-after.jpg',
      durationEn: '12 weeks',
      durationAr: '12 اسبوع',
    },
    {
      nameEn:'Adel Ibrahim',
      nameAr: 'عادل ابراهيم',
     before: 'https://i.postimg.cc/TYyp4GrB/clint6-before.jpg',
      after: 'https://i.postimg.cc/v824hD6W/clint6-after.jpg',
      durationEn: '8 weeks',
      durationAr: '8 اسابيع',
    },
    {
      nameEn: 'Sami Nagib',
      nameAr: 'سامي نجيب',
     before: 'https://i.postimg.cc/k5CGGbkd/clint7-before.jpg',
      after: 'https://i.postimg.cc/kgKD7cYc/clint7-after.jpg',
      durationEn: '8 weeks',
      durationAr: '8 اسابيع',
    },
    {
      nameEn: ' Ibrahim Sobhy',
      nameAr: 'ابراهيم صبحي ',
        before: 'https://i.postimg.cc/k4X5FdJ1/clint8-before.jpg',
      after: 'https://i.postimg.cc/6Qh3vQX4/clint8-after.jpg',
      durationEn:  '10 weeks',
      durationAr:'10 اسابيع',
    },
    {
      nameEn: ' Hany Mahmoud',
      nameAr: 'هاني محمود',
     before: 'https://i.postimg.cc/Jn6zpdt1/clint9-before.jpg',
      after: 'https://i.postimg.cc/2y18MFBn/clint10-after.jpg',
      durationEn: '10 weeks',
      durationAr: '10 اسابيع' ,
    },
    {
      nameEn: ' Moamen Abdel Khalek',
      nameAr:'مؤمن عبد الخالق',
    before: 'https://i.postimg.cc/RCY0f8jd/clint11-before.jpg',
      after: 'https://i.postimg.cc/T1BY6LrF/clint11-after.jpg',
      durationEn: '8 weeks',
      durationAr: '8 اسابيع' ,
    },
    
    {
      nameEn: ' Mostafa Adel',
      nameAr:  ' مصطفي عادل',
      before: 'https://i.postimg.cc/wj8T4Nxs/clint12-before.jpg',
      after: 'https://i.postimg.cc/15N3KBSQ/clint12-after.jpg',
      durationEn: '8 weeks',
      durationAr: '8 اسابيع' ,
    },
    
    {
      nameEn: 'Noor Hafez',
      nameAr: 'نور حافظ' ,
     before: 'https://i.postimg.cc/52B9htjK/clint13-before.jpg',
      after: 'https://i.postimg.cc/1zyRsZqm/clint14-after.jpg',
      durationEn: '8 weeks',
      durationAr:  '8 اسابيع' ,
    },
  ];

  // Reset slide to 0 when language changes to prevent out-of-bounds issues
  useEffect(() => {
    setCurrentSlide(0);
  }, [language]);

  const handleSlideChange = (newSlide: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newSlide);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % transformations.length;
    handleSlideChange(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + transformations.length) % transformations.length;
    handleSlideChange(newSlide);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      handleSlideChange(index);
    }
  };

  const getCurrentTransformation = () => {
    return transformations[currentSlide] || transformations[0];
  };

  const currentTransformation = getCurrentTransformation();

  return (
    <section id="transformations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('transformationsTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('transformationsSubtitle')}
          </p>
        </div>

        {/* Coach Photo Section */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-600 shadow-2xl">
              <img
                src= {imgtrans}
                alt="Coach Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-lg">
              5+
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Navigation buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 
                     bg-white hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed
                     rounded-full p-4 shadow-xl hover:shadow-2xl 
                     transition-all duration-300 ease-out
                     border-2 border-transparent hover:border-red-200
                     group transform hover:scale-110 active:scale-95"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-red-600 transition-colors duration-200" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 
                     bg-white hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed
                     rounded-full p-4 shadow-xl hover:shadow-2xl 
                     transition-all duration-300 ease-out
                     border-2 border-transparent hover:border-red-200
                     group transform hover:scale-110 active:scale-95"
            aria-label="Next transformation"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-red-600 transition-colors duration-200" />
          </button>

          {/* Transformation Card with smooth transitions */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <div className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 transition-all duration-300">
                    {language === 'ar' ? currentTransformation.nameAr : currentTransformation.nameEn}
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full">
                    <span className="text-red-700 font-semibold text-lg">
                      {language === 'ar' ? currentTransformation.durationAr : currentTransformation.durationEn}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="text-center group">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        {language === 'ar' ? 'قبل' : 'Before'}
                      </h4>
                      <div className="w-16 h-1 bg-gray-300 mx-auto rounded-full"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img
                        src={currentTransformation.before}
                        alt={`Before transformation - ${language === 'ar' ? currentTransformation.nameAr : currentTransformation.nameEn}`}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', currentTransformation.before);
                          e.currentTarget.src = 'https://images.pexels.com/photos/6998301/pexels-photo-6998301.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-red-600 mb-2 uppercase tracking-wide">
                        {language === 'ar' ? 'بعد' : 'After'}
                      </h4>
                      <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img
                        src={currentTransformation.after}
                        alt={`After transformation - ${language === 'ar' ? currentTransformation.nameAr : currentTransformation.nameEn}`}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', currentTransformation.after);
                          e.currentTarget.src = 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3 rtl:space-x-reverse">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 ease-out rounded-full border-2 
                          ${index === currentSlide 
                            ? 'w-12 h-4 bg-red-600 border-red-600' 
                            : 'w-4 h-4 bg-gray-300 border-gray-300 hover:bg-red-300 hover:border-red-300'
                          }
                          disabled:opacity-50 disabled:cursor-not-allowed
                          transform hover:scale-110 active:scale-95`}
                aria-label={`Go to transformation ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500 font-medium">
              {currentSlide + 1} / {transformations.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;