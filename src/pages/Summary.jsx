import { useBooking } from "../store/bookingStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, Stethoscope, CheckCircle, AlertCircle } from "lucide-react";

export default function Summary() {
  const navigate = useNavigate();
  const booking = useBooking();
  const { t, i18n } = useTranslation();

  const confirm = () => {
    // Yahan API call kar sakte ho future mein
    navigate("/success");
  };

  // Redirect if data missing
  if (!booking.service || !booking.date || !booking.time || !booking.user.name) {
    navigate("/services");
    return null;
  }

  // Date format - Arabic/English
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-6 max-w-2xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/details")}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowLeft size={18} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
          {t('backToDetails')}
        </button>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('bookingSummary')}
        </h1>

        {/* Success Message */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6 flex items-start gap-3">
          <CheckCircle className="text-green-600 dark:text-green-400 mt-0.5" size={20} />
          <div>
            <p className="font-semibold text-green-800 dark:text-green-300">{t('almostDone')}</p>
            <p className="text-sm text-green-700 dark:text-green-400">{t('reviewConfirm')}</p>
          </div>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden mb-6">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white">
            <h2 className="text-xl font-bold">{booking.service.name}</h2>
            <p className="text-blue-100 text-sm">{booking.service.category}</p>
          </div>

          {/* Details */}
          <div className="p-6 space-y-5">
            
            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-200 dark:border-zinc-700">
              <div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1 text-sm">
                  <Calendar size={16} />
                  <span>{t('date')}</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {formatDate(booking.date)}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1 text-sm">
                  <Clock size={16} />
                  <span>{t('time')}</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {booking.time}
                </p>
              </div>
            </div>

            {/* Patient Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('patientDetails')}</h3>
              
              <div className="flex items-center gap-3">
                <User className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('fullName')}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{booking.user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('phoneNumber')}</p>
                  <p className="font-medium text-gray-900 dark:text-white" dir="ltr">
                    +966 {booking.user.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('email')}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{booking.user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Stethoscope className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('gender')}</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {booking.user.gender === 'male' ? t('male') : t('female')}
                  </p>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-gray-50 dark:bg-zinc-700 rounded-xl p-4 mt-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-400">{t('consultationFee')}</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {booking.service.price} {t('sar')}
                </span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-blue-600 dark:text-blue-400 pt-2 border-t border-gray-200 dark:border-zinc-600">
                <span>{t('total')}</span>
                <span>{booking.service.price} {t('sar')}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Terms Note */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 flex items-start gap-2">
          <AlertCircle className="text-amber-600 dark:text-amber-400 mt-0.5" size={18} />
          <p className="text-sm text-amber-800 dark:text-amber-300">
            {t('cancellationNote')}
          </p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={confirm}
          className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <CheckCircle size={22} />
          {t('confirmBooking')}
        </button>

      </div>
    </div>
  );
}