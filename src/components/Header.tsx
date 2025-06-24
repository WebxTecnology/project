import React, { useState } from 'react';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'transformations', href: '#transformations' },
    { key: 'pricing', href: '#pricing' },
    { key: 'locations', href: '#locations' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">
              {language === 'ar' ? 'المدرب مصطفي' : 'Coach Mostafa'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Toggle & WhatsApp */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'عربي' : 'English'}</span>
            </button>
            <a
              href="https://wa.me/201144737901"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 rtl:space-x-reverse transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-700 hover:text-red-600"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href="https://wa.me/201144737901"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-base font-medium text-green-600 hover:text-green-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            {t('whatsappContact')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;