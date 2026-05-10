import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import Card from "../components/Card";

export default function Calendar() {
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get days in current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  // Check if Friday - Saudi weekend
  const isFriday = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.getDay() === 5; // 5 = Friday
  };

  // Check if past date
  const isPastDate = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Month navigation
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Month name in Arabic/English
  const monthName = currentMonth.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', {
    month: 'long',
    year: 'numeric'
  });

  // Day names
  const dayNames = i18n.language === 'ar' 
    ? ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'] // أحد، اثنين، ثلاثاء، أربعاء، خميس، جمعة، سبت
    : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Create calendar grid
  const calendarDays = [];
  
  // Empty cells for starting day
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="p-4"></div>);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selectedDate?.day === day && 
                      selectedDate?.month === currentMonth.getMonth() &&
                      selectedDate?.year === currentMonth.getFullYear();
    const disabled = isFriday(day) || isPastDate(day);

    calendarDays.push(
      <button
        key={day}
        onClick={() => !disabled && setSelectedDate({ 
          day, 
          month: currentMonth.getMonth(), 
          year: currentMonth.getFullYear() 
        })}
        disabled={disabled}
        className={`
          p-3 md:p-4 rounded-xl text-center border-2 font-medium transition-all
          ${isSelected
            ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
            : disabled
            ? "bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-zinc-600 border-gray-200 dark:border-zinc-700 cursor-not-allowed"
            : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-white border-gray-300 dark:border-zinc-700 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-700"
          }
        `}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 p-4 md:p-6">
      <div className="container mx-auto max-w-3xl">
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <CalendarIcon className="text-blue-600" />
          {t('calendar')}
        </h1>

        <Card className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6">
          
          {/* Month Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevMonth}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 transition"
            >
              <ChevronLeft size={24} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
            </button>
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {monthName}
            </h2>
            
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 transition"
            >
              <ChevronRight size={24} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {dayNames.map((day, i) => (
              <div 
                key={i} 
                className={`text-center text-sm font-semibold ${
                  i === 5 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays}
          </div>

          {/* Selected Date Display */}
          {selectedDate && (
            <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {t('selectedDate')}:
              </p>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {new Date(selectedDate.year, selectedDate.month, selectedDate.day)
                  .toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
              </h3>
            </div>
          )}

          {/* Note */}
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
            {t('fridayClosedNote')}
          </div>
        </Card>
      </div>
    </div>
  );
}