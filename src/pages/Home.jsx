import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
export default function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: 1, name: "General Checkup", nameAr: "فحص عام", icon: "🩺" },
    { id: 2, name: "Dental Care", nameAr: "العناية بالأسنان", icon: "🦷" },
    { id: 3, name: "Eye Exam", nameAr: "فحص العيون", icon: "👁️" },
    { id: 4, name: "Skin Care", nameAr: "العناية بالبشرة", icon: "✨" },
    { id: 5, name: "Cardiology", nameAr: "أمراض القلب", icon: "❤️" },
    { id: 6, name: "Orthopedics", nameAr: "جراحة العظام", icon: "🦴" },
  ];

  // ✅ Search Filter Logic
  const filteredCategories = categories.filter((cat) => {
    const searchLower = searchQuery.toLowerCase();
    const name = i18n.language === 'ar' ? cat.nameAr : cat.name;
    return name.toLowerCase().includes(searchLower);
  });

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {t('welcomeTitle')}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t('welcomeSubtitle')}
        </p>

        {/* ✅ Search with Icon */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full p-4 pl-12 pr-12 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Categories Grid */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {searchQuery ? t('searchResults') : t('categories')}
        </h2>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCategories.map((category) => (
              <Card
                key={category.id}
                onClick={() => navigate(`/services?category=${category.id}`)}
                className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {i18n.language === 'ar' ? category.nameAr : category.name}
                </h3>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {t('noResultsFound')}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}