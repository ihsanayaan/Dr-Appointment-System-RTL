import { Clock, Tag } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function ServiceCard({ name, price, duration, category, onClick }) {
  const { t } = useTranslation();
  
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl p-6 cursor-pointer transition-all duration-300 group"
    >
      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 mb-3">
        {name}
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Tag size={16} />
          <span>{category}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
          {price}
        </span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
          {t('bookNow')}
        </button>
      </div>
    </div>
  );
}