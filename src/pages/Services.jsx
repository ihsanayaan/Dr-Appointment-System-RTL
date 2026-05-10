import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search, X, SlidersHorizontal } from "lucide-react";

export default function Services() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [showFilters, setShowFilters] = useState(false);

  const services = [
    {
      id: 1,
      name: "General Consultation",
      nameAr: "استشارة عامة",
      category: 1,
      categoryName: "General Checkup",
      categoryNameAr: "فحص عام",
      price: 150,
      duration: "30 min",
      durationAr: "30 دقيقة",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400"
    },
    {
      id: 2,
      name: "Teeth Cleaning",
      nameAr: "تنظيف الأسنان",
      category: 2,
      categoryName: "Dental Care",
      categoryNameAr: "العناية بالأسنان",
      price: 200,
      duration: "45 min",
      durationAr: "45 دقيقة",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400"
    },
    {
      id: 3,
      name: "Eye Checkup",
      nameAr: "فحص العيون",
      category: 3,
      categoryName: "Eye Exam",
      categoryNameAr: "فحص العيون",
      price: 180,
      duration: "30 min",
      durationAr: "30 دقيقة",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400"
    },
    {
      id: 4,
      name: "Facial Treatment",
      nameAr: "علاج الوجه",
      category: 4,
      categoryName: "Skin Care",
      categoryNameAr: "العناية بالبشرة",
      price: 300,
      duration: "60 min",
      durationAr: "60 دقيقة",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400"
    },
    {
      id: 5,
      name: "Heart Checkup",
      nameAr: "فحص القلب",
      category: 5,
      categoryName: "Cardiology",
      categoryNameAr: "أمراض القلب",
      price: 400,
      duration: "45 min",
      durationAr: "45 دقيقة",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 6,
      name: "Bone Scan",
      nameAr: "فحص العظام",
      category: 6,
      categoryName: "Orthopedics",
      categoryNameAr: "جراحة العظام",
      price: 350,
      duration: "40 min",
      durationAr: "40 دقيقة",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400"
    }
  ];

  const categories = [
    { id: 'all', name: "All Services", nameAr: "جميع الخدمات" },
    { id: '1', name: "General Checkup", nameAr: "فحص عام" },
    { id: '2', name: "Dental Care", nameAr: "العناية بالأسنان" },
    { id: '3', name: "Eye Exam", nameAr: "فحص العيون" },
    { id: '4', name: "Skin Care", nameAr: "العناية بالبشرة" },
    { id: '5', name: "Cardiology", nameAr: "أمراض القلب" },
    { id: '6', name: "Orthopedics", nameAr: "جراحة العظام" },
  ];

  // ✅ Filter Logic
  const filteredServices = services.filter((service) => {
    const searchLower = searchQuery.toLowerCase();
    const name = i18n.language === 'ar'? service.nameAr : service.name;
    const categoryName = i18n.language === 'ar'? service.categoryNameAr : service.categoryName;

    const matchesSearch = name.toLowerCase().includes(searchLower) ||
                         categoryName.toLowerCase().includes(searchLower);

    const matchesCategory = selectedCategory === 'all' ||
                           service.category.toString() === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 p-4 md:p-6">
      <div className="container mx-auto max-w-7xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowLeft size={18} className={i18n.language === 'ar'? 'rotate-180' : ''} />
          {t('backToHome')}
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t('ourServices')}
        </h1>

        {/* Search + Filter */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchServices')}
                className="w-full p-4 pl-12 pr-12 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
            >
              <SlidersHorizontal size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Category Pills */}
          {showFilters && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === cat.id
                     ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700'
                  }`}
                >
                  {i18n.language === 'ar'? cat.nameAr : cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Count */}
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {filteredServices.length} {t('servicesFound')}
        </p>

        {/* Services Grid */}
        {filteredServices.length > 0? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => navigate(`/service/${service.id}`)}
                className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-all"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {i18n.language === 'ar'? service.nameAr : service.name}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-lg font-semibold">
                      {service.price} {t('sar')}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {i18n.language === 'ar'? service.categoryNameAr : service.categoryName}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>⭐ {service.rating}</span>
                    <span>{i18n.language === 'ar'? service.durationAr : service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {t('noServicesFound')}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}