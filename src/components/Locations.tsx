import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gymimg from '../assest/gym.jpg'; 

const Locations: React.FC = () => {
  const { language, t } = useLanguage();

  const locations = [
    {
      name: language === 'ar' ? 'نادي برو جيم' : 'Bro Gym',
      address: language === 'ar' ? 'الشارع الرئيسي فوق اكازيون  القويري العجمي الاسكندريه' : 'Main Street above Akazio - El Agami, Alexandria',
      schedule: language === 'ar' ? 'الثلاثاء - الاحد: 6:00 م - 2:00 ص' : 'Wednesday - Sunday: 6:00 PM - 2:00 AM',
      image: gymimg,
    },
  ];

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <a href="https://www.facebook.com/profile.php?id=61557989571072">

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('locationsTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('locationsSubtitle')}
          </p>
        </div>

        {/* جعل الكروت في منتصف الصفحة وبشكل Responsive */}
        <div className="flex flex-wrap justify-center gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {location.name}
                </h3>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse mb-3">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    {location.address}
                  </p>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <Clock className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    {location.schedule}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      </a>
    </section>
  );
};

export default Locations;
