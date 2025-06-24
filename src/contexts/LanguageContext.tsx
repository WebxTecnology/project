import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    transformations: 'Transformations',
    pricing: 'Pricing',
    locations: 'Gym Locations',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Transform Your Body with Coach Mostafa',
    heroSubtitle: 'Professional fitness coaching for weight loss, muscle gain, and complete body transformation',
    startJourney: 'Start Your Journey',
    
    // About Section
    aboutTitle: 'Meet Your Coach',
    aboutText: 'With over 5 years of experience in fitness coaching and nutrition, I\'ve helped hundreds of clients achieve their dream bodies. Certified personal trainer specializing in body transformation, weight loss, and muscle building.',
    certifications: 'Certifications',
    cert1: 'Certificate from the Ministry of Youth and Sports',
    cert11: 'Certified in Nutrition by the Ministry of Youth and Sports',
    cert12: 'Qualified in Injury & Fitness – Ministry of Youth and Sports',
    cert2: 'Accredited membership card from the Ministry of Youth and Sports',
    cert3: 'Body Transformation Expert',
    
    // Services Section
    servicesTitle: 'Our Services',
    service1Title: 'Weight Loss Programs',
    service1Desc: 'Customized workout and nutrition plans for effective weight loss',
    service2Title: 'Muscle Building',
    service2Desc: 'Strength training programs to build lean muscle mass',
    service3Title: 'Body Transformation',
    service3Desc: 'Complete body makeover with personalized coaching',
    service4Title: 'Nutrition Coaching',
    service4Desc: 'Expert guidance on meal planning and healthy eating habits',
    
    // Transformations Section
    transformationsTitle: 'Success Stories',
    transformationsSubtitle: 'Real results from real clients',
    beforeAfter: 'Before & After',
    
    // Pricing Section
    pricingTitle: 'Choose Your Plan',
    pricingSubtitle: 'Flexible plans to fit your goals and budget',
    plan1Title: 'Silver  Plan',
    plan1Price: '800 EGP',
    plan1Duration: 'per 3 month',
    plan2Title: 'Gold Plan',
    plan2Price: '1,000 EGP',
    plan2Duration: 'per 3 month',
    plan3Title: 'Vip Plan',
    plan3Price: '1,500 EGP',
    plan3Duration: 'per 3 month',
    
    feature1: 'The training program is tailored to our monthly goal',
    feature2: 'A diet plan tailored to our monthly goal',
    feature3: 'Follow-up every two weeks',
    feature4: 'supplements and vitamins plan',
    // plan 2 features
    feature5: 'Follow-up every week',
    feature6: 'Daily follow-up',
    feature7: '24/7 follow-up on WhatsApp',
    feature8: 'Body composition analysis',
    
    paymentTitle: 'Payment Method',
    paymentInstructions: 'Pay via Etisalat Cash to: 01144737901',
    paymentStep2: 'After payment, send receipt to WhatsApp',
    
    // Locations Section
    locationsTitle: 'Training Locations',
    locationsSubtitle: 'Find me at these premium gyms',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to start your transformation?',
    nameField: 'Full Name',
    emailField: 'Email Address',
    messageField: 'Message',
    sendMessage: 'Send Message',
    whatsappContact: 'WhatsApp Us',
    
    // Footer
    footerText: 'Transform your body, transform your life',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: '© 2025 WebX Tecnology. All rights reserved.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    transformations: 'التحولات',
    pricing: 'الأسعار',
    locations: 'مواقع الجيم',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'حول جسمك مع المدرب مصطفي',
    heroSubtitle: 'تدريب احترافي للياقة البدنية لفقدان الوزن وبناء العضلات وتحويل الجسم بالكامل',
    startJourney: 'ابدأ رحلتك',
    
    // About Section
    aboutTitle: 'تعرف على مدربك',
    aboutText: 'بخبرة تزيد عن 5 سنوات في التدريب واللياقة البدنية والتغذية، ساعدت المئات من العملاء في تحقيق جسم أحلامهم. مدرب شخصي معتمد متخصص في تحويل الجسم وفقدان الوزن وبناء العضلات.',
    certifications: 'الشهادات',
    cert1: ' شهاده من وزارة الشباب والرياضة',
    cert2: ' كارنية معتمد من وزارة الشباب والرياضة  ',
    cert11: 'شهادة معتمدة في التغذية من وزارة الشباب والرياضة',
    cert12: 'مؤهل في الإصابات واللياقة البدنية – وزارة الشباب والرياضة',
    cert3: 'خبير تحويل الجسم',
    
    // Services Section
    servicesTitle: 'خدماتنا',
    service1Title: 'برامج فقدان الوزن',
    service1Desc: 'خطط تمرين وتغذية مخصصة لفقدان الوزن بفعالية',
    service2Title: 'بناء العضلات',
    service2Desc: 'برامج تدريب القوة لبناء كتلة عضلية خالية من الدهون',
    service3Title: 'تحويل الجسم',
    service3Desc: 'تغيير شامل للجسم مع تدريب شخصي مخصص',
    service4Title: 'تدريب التغذية',
    service4Desc: 'إرشاد خبير في تخطيط الوجبات وعادات الأكل الصحية',
    
    // Transformations Section
    transformationsTitle: 'قصص النجاح',
    transformationsSubtitle: 'نتائج حقيقية من عملاء حقيقيين',
    beforeAfter: 'قبل وبعد',
    
    // Pricing Section
    pricingTitle: 'اختر خطتك',
    pricingSubtitle: 'خطط مرنة تناسب أهدافك وميزانيتك',
    plan1Title: 'الخطة الأساسية',
    plan1Price: '800 جنيه',
    plan1Duration: '3 شهور',
    plan2Title: 'الخطة المميزة',
    plan2Price: '1,200 جنيه',
    plan2Duration: '3 شهور',
    plan3Title: 'الخطة النخبة',
    plan3Price: '1,800 جنيه',
    plan3Duration: '3 شهور',
    
    feature1: 'برنامج التدريب مصمم خصيصًا لهدفنا الشهري',
    feature2: 'خطة نظام غذائي مصممة خصيصًا لهدفنا الشهري',
    feature3: 'متابعة كل أسبوعين',
    feature4: ' خطة المكملات والفيتامينات',
    // plan 2 features
    feature5: 'متابعة كل أسبوع',
    feature6: 'متابعة يومية',
    feature7: 'متابعة 24/7 على واتساب',
    feature8: 'تحليل تركيب الجسم',
    
    paymentTitle: 'طريقة الدفع',
    paymentInstructions: 'ادفع عبر اتصالات كاش إلى: 01144737901',
    paymentStep2: 'بعد الدفع، أرسل الإيصال على الواتساب',
    
    // Locations Section
    locationsTitle: 'مواقع التدريب',
    locationsSubtitle: 'ابحث عني في هذه الصالات المميزة',
    
    // Contact Section
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'مستعد لبدء تحولك؟',
    nameField: 'الاسم الكامل',
    emailField: 'البريد الإلكتروني',
    messageField: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    whatsappContact: 'تواصل واتساب',
    
    // Footer
    footerText: 'حول جسمك، حول حياتك',
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
    copyright: '© 2025 WebX Tecnology. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    
    // Update HTML attributes
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};