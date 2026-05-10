import { useForm } from "react-hook-form";
import { useBooking } from "../store/bookingStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ArrowLeft, User, Phone, Mail, Users, AlertCircle } from "lucide-react";

export default function UserDetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const setUser = useBooking((s) => s.setUser);
  const { service, date, time } = useBooking();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const submitForm = (data) => {
    setUser(data);
    navigate("/summary");
  };

  if (!service || !date || !time) {
    navigate("/services");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-6 max-w-2xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/select-datetime")}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowLeft size={18} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
          {t('backToDateTime')}
        </button>

        {/* Booking Summary Card */}
        <div className="bg-blue-50 dark:bg-zinc-800 border border-blue-200 dark:border-zinc-700 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('bookingSummary')}</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <p>{service.name}</p>
            <p>{date} • {time}</p>
            <p className="font-bold text-blue-600 dark:text-blue-400">{service.price} {t('sar')}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(submitForm)} className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 space-y-6">
          
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {t('enterDetails')}
          </h2>

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User size={18} />
              {t('fullName')} *
            </label>
            <input
              {...register("name", { 
                required: t('nameRequired'),
                minLength: { value: 3, message: t('nameMinLength') }
              })}
              placeholder={t('namePlaceholder')}
              className="w-full p-4 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Phone - Saudi Format */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Phone size={18} />
              {t('phoneNumber')} *
            </label>
            <div className="flex gap-2">
              <div className="bg-gray-100 dark:bg-zinc-700 px-4 py-4 rounded-xl text-gray-700 dark:text-gray-300 font-medium">
                +966
              </div>
              <input
                {...register("phone", { 
                  required: t('phoneRequired'),
                  pattern: {
                    value: /^5[0-9]{8}$/,
                    message: t('phoneInvalid')
                  }
                })}
                placeholder="5XXXXXXXX"
                type="tel"
                maxLength={9}
                className="flex-1 p-4 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.phone.message}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {t('phoneHint')}
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail size={18} />
              {t('email')} *
            </label>
            <input
              {...register("email", { 
                required: t('emailRequired'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('emailInvalid')
                }
              })}
              placeholder={t('emailPlaceholder')}
              type="email"
              className="w-full p-4 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Gender - Saudi culture ke hisaab se */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Users size={18} />
              {t('gender')} *
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="relative">
                <input
                  type="radio"
                  value="male"
                  {...register("gender", { required: t('genderRequired') })}
                  className="peer sr-only"
                />
                <div className="p-4 border-2 border-gray-300 dark:border-zinc-700 rounded-xl cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 text-center transition">
                  <span className="font-medium text-gray-700 dark:text-gray-300 peer-checked:text-blue-600">
                    {t('male')}
                  </span>
                </div>
              </label>

              <label className="relative">
                <input
                  type="radio"
                  value="female"
                  {...register("gender", { required: t('genderRequired') })}
                  className="peer sr-only"
                />
                <div className="p-4 border-2 border-gray-300 dark:border-zinc-700 rounded-xl cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 text-center transition">
                  <span className="font-medium text-gray-700 dark:text-gray-300 peer-checked:text-blue-600">
                    {t('female')}
                  </span>
                </div>
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.gender.message}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {t('genderNote')}
            </p>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            {t('continueToSummary')}
          </button>
        </form>
      </div>
    </div>
  );
}
