import { useBooking } from "../store/bookingStore";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { CheckCircle, Calendar, Clock, MapPin, Share2, Home, Download, Stethoscope, User, Phone, Mail } from "lucide-react";
import { useEffect } from "react";

export default function Success() {
  const { service, date, time, user, resetBooking } = useBooking(); // ← resetBooking
  const { t, i18n } = useTranslation();

  // Booking reference number generate
  const bookingRef = `SB${Date.now().toString().slice(-8)}`;

  // ✅ Page load hote hi booking data clear karo
  useEffect(() => {
    resetBooking(); // Service, date, time clear - user data rakho
  }, [resetBooking]);

  // Date format
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // WhatsApp share message
  const shareMessage = i18n.language === 'ar' 
    ? `تم تأكيد حجزي في صحتك!%0A%0Aالخدمة: ${service?.name}%0Aالتاريخ: ${formatDate(date)}%0Aالوقت: ${time}%0Aرقم الحجز: ${bookingRef}`
    : `My booking at SehaBook is confirmed!%0A%0AService: ${service?.name}%0ADate: ${formatDate(date)}%0ATime: ${time}%0ABooking Ref: ${bookingRef}`;

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${shareMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 py-8 max-w-2xl">

        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 animate-bounce">
            <CheckCircle className="text-green-600 dark:text-green-400" size={48} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
            {t('bookingConfirmed')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t('appointmentBooked')}
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl overflow-hidden mb-6">
          
          {/* Header with Ref */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 text-white text-center">
            <p className="text-sm text-green-100 mb-1">{t('bookingReference')}</p>
            <p className="text-2xl font-bold tracking-wider">{bookingRef}</p>
          </div>

          {/* Details */}
          <div className="p-6 space-y-4">
            
            {/* Service */}
            <div className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-zinc-700">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <Stethoscope className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('service')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{service?.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service?.category}</p>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200 dark:border-zinc-700">
              <div className="flex items-start gap-3">
                <Calendar className="text-gray-400 mt-1" size={18} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('date')}</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {formatDate(date)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-gray-400 mt-1" size={18} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('time')}</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {time}
                  </p>
                </div>
              </div>
            </div>

            {/* Patient */}
            <div className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-zinc-700">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                <User className="text-purple-600 dark:text-purple-400" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('patient')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{user?.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400" dir="ltr">+966 {user?.phone}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 mt-1" size={18} />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('location')}</p>
                <p className="font-medium text-gray-900 dark:text-white text-sm">
                  {t('clinicAddress')}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-blue-50 dark:bg-zinc-700 rounded-xl p-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{t('totalPaid')}</span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {service?.price} {t('sar')}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={handleWhatsAppShare}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Share2 size={20} />
            {t('shareWhatsApp')}
          </button>

          <button
            onClick={() => window.print()}
            className="bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Download size={20} />
            {t('download')}
          </button>
        </div>

        {/* Home Button - reset hata diya */}
        <Link to="/">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Home size={22} />
            {t('goHome')}
          </button>
        </Link>

        {/* Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('smsConfirmation')}
          </p>
        </div>

      </div>
    </div>
  );
}