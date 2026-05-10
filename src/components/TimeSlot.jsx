import { Check } from "lucide-react";

export default function TimeSlot({ time, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        p-3 rounded-xl border-2 font-medium transition-all duration-200
        ${selected
         ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105'
          : 'bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-600'
        }
      `}
    >
      <div className="flex items-center justify-center gap-1">
        {selected && <Check size={16} />}
        <span>{time}</span>
      </div>
    </button>
  );
}