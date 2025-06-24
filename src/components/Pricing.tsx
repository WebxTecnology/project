import React from 'react';
import { Check, CreditCard, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Swal from 'sweetalert2';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      titleKey: 'plan1Title',
      priceKey: 'plan1Price',
      durationKey: 'plan1Duration',
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
      popular: false,
    },
    {
      titleKey: 'plan2Title',
      priceKey: 'plan2Price',
      durationKey: 'plan2Duration',
      features: ['feature1', 'feature2', 'feature5', 'feature4'],
      popular: true,
    },
    {
      titleKey: 'plan3Title',
      priceKey: 'plan3Price',
      durationKey: 'plan3Duration',
      features: ['feature1', 'feature2','feature8', 'feature6', 'feature4',   'feature7', ],
      popular: false,
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'طريقة الدفع',
      html: `
        <p>💳 ادفع عبر اتصالات كاش إلى: <strong>01144737901</strong></p>
        <p>📱 بعد الدفع، أرسل الإيصال على الواتساب</p>
      `,
      confirmButtonText: 'تم',
      confirmButtonColor: '#ef4444',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '#contact';
      }
    });
  };

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('pricingTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('pricingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-red-500 scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t(plan.titleKey)}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-red-600">
                    {t(plan.priceKey)}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {t(plan.durationKey)}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={handleClick}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {t('startJourney')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Instructions */}
        <div className="max-w-2xl mx-auto bg-red-50 rounded-2xl p-8 border-2 border-red-200">
          <div className="text-center">
            <CreditCard className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('paymentTitle')}
            </h3>
            <div className="space-y-3 text-lg">
              <p className="text-gray-700">
                💳 {t('paymentInstructions')}
              </p>
              <p className="text-gray-700">
                📱 {t('paymentStep2')}
              </p>
            </div>
            <a
              href="https://wa.me/201144737901?text=مرحبًا،كبتن مصطفي تم الاشتراك في باقاتك واريد طلب مراجعه  "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('whatsappContact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
