import { FiMenu, FiCalendar, FiX, FiGlobe, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const toggleLanguage = () => {
    const newLang = lang === 'en'? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  // RTL set kar HTML tag pe
  useEffect(() => {
    document.documentElement.dir = lang === 'ar'? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <header className="w-full bg-white dark:bg-zinc-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Left Side: Hamburger + Logo + Desktop Links */}
        <div className="flex items-center gap-8">

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            {isMenuOpen? <FiX /> : <FiMenu />}
          </button>

          <Link
            to="/"
            className="font-bold text-xl md:text-2xl text-blue-600 dark:text-blue-400 flex items-center gap-2"
          >
            <FiCalendar />
            {t('brandName')}
          </Link>

          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium">
              {t('home')}
            </Link>
            <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium">
              {t('services')}
            </Link>
            <Link to="/success" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium">
              {t('bookings')}
            </Link>
            <Link to="/doctors" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium">
              {t('doctors')}
            </Link>
          </div>
        </div>

        {/* Right Side: Lang + Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-4 rounded-lg text-xs md:text-sm font-semibold"
          >
            <FiGlobe size={16} />
            <span>{lang === 'en'? 'العربية' : 'English'}</span>
          </button>

          <Link to="/profile" className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600">
            <FiUser />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-zinc-800 py-4 px-6 space-y-2 border-t">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-blue-50 rounded-lg">
            {t('home')}
          </Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-blue-50 rounded-lg">
            {t('services')}
          </Link>
          <Link to="/success" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-blue-50 rounded-lg">
            {t('bookings')}
          </Link>
          <Link to="/doctors" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-blue-50 rounded-lg">
            {t('doctors')}
          </Link>
        </div>
      )}
    </header>
  );
}