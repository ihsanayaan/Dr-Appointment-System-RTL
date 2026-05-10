import { useBooking } from "../store/bookingStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, AlertCircle } from "lucide-react";
import TimeSlot from "../components/TimeSlot";

export default function SelectDateTime() {
  const navigate = useNavigate();
  const setDate = useBooking((s) => s.setDate);
  const setTime = useBooking((s) => s.setTime);
  const { service } = useBooking();
  const { t, i18n } = useTranslation();

  const [localDate, setLocalDate] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [error, setError] = useState("");

  // Saudi time slots - 24h format
  const times = [
    "09:00", "10:00", "11:00", "12:00",
    "16:00", "17:00", "18:00", "19:00", "20:00"
  ];

  // Aaj ki date - past dates disable karne ke liye
  const today = new Date().toISOString().split('T')[0];

  // Friday/Saturday weekend check - Saudi mein Friday off hota
  const isWeekend = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 5; // 5 = Friday
  };

  const continueNext = () => {
    setError("");

    if (!localDate ||!localTime) {
      setError(t('selectDateTimeError'));
      return;
    }

    if (isWeekend(localDate)) {
      setError(t('weekendError'));
      return;
    }

    setDate(localDate);
    setTime(localTime);
    navigate("/details");
  };

  // 24h to 12h format for display
  const formatTime = (time24) => {
    const [hour, minute] = time24.split(':');
    const h = parseInt(hour);
    const period = h >= 12? t('pm') : t('am');
    const h12 = h % 12 || 12;
    return `${h12}:${minute} ${period}`;
  };

  if (!service) {
    navigate("/services");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-6 max-w-2xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(`/service/${service.id}`)}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowLeft size={18} className={i18n.language === 'ar'? 'rotate-180' : ''} />
          {t('backToDetails')}
        </button>

        {/* Service Info */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white">{service.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.price} {t('sar')} • {service.duration} {t('min')}
          </p>
        </div>

        {/* Date Selection */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-blue-600 dark:text-blue-400" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('selectDate')}
            </h3>
          </div>

          <input
            type="date"
            min={today}
            value={localDate}
            className="w-full p-4 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none text-lg"
            onChange={(e) => {
              setLocalDate(e.target.value);
              setError("");
            }}
          />

          {localDate && isWeekend(localDate) && (
            <div className="mt-3 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
              <AlertCircle size={16} className="mt-0.5" />
              <span>{t('fridayClosed')}</span>
            </div>
          )}
        </div>

        {/* Time Selection */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-blue-600 dark:text-blue-400" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('selectTime')}
            </h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {times.map((t) => (
              <TimeSlot
                key={t}
                time={formatTime(t)}
                selected={localTime === t}
                onClick={() => {
                  setLocalTime(t);
                  setError("");
                }}
              />
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl mb-6 flex items-start gap-2">
            <AlertCircle size={20} className="mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Continue Button */}
        <button
          onClick={continueNext}
          disabled={!localDate ||!localTime || isWeekend(localDate)}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none"
        >
          {t('continue')}
        </button>

      </div>
    </div>
  );
}