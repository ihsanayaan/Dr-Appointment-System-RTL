import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Edit2, Save, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);

  // Dummy user data - baad mein API se aayega
  const [userData, setUserData] = useState({
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "512345678",
    dob: "1995-05-15",
    city: "Riyadh",
    gender: "male"
  });

  const [formData, setFormData] = useState(userData);

  const handleSave = () => {
    setUserData(formData);
    setIsEditing(false);
    // Yahan API call karna future mein
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 p-4 md:p-6">
      <div className="container mx-auto max-w-2xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowLeft size={18} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
          {t('backToHome')}
        </button>

        {/* Profile Card */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden">
          
          {/* Header with Avatar */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
            <div className="relative inline-block">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=random&size=128`}
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4">
              {userData.name}
            </h2>
            <p className="text-blue-100">
              {userData.email}
            </p>
          </div>

          {/* Profile Details */}
          <div className="p-6 space-y-5">
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t('personalInfo')}
              </h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium text-sm"
                >
                  <Edit2 size={16} />
                  {t('edit')}
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-sm"
                  >
                    <Save size={14} />
                    {t('save')}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg text-sm"
                  >
                    <X size={14} />
                    {t('cancel')}
                  </button>
                </div>
              )}
            </div>

            {/* Name */}
            <div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                <User size={16} />
                <span>{t('fullName')}</span>
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <p className="font-medium text-gray-900 dark:text-white">{userData.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                <Mail size={16} />
                <span>{t('email')}</span>
              </div>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <p className="font-medium text-gray-900 dark:text-white">{userData.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                <Phone size={16} />
                <span>{t('phoneNumber')}</span>
              </div>
              {isEditing ? (
                <div className="flex gap-2">
                  <div className="bg-gray-100 dark:bg-zinc-700 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium">
                    +966
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    maxLength={9}
                    className="flex-1 p-3 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              ) : (
                <p className="font-medium text-gray-900 dark:text-white" dir="ltr">+966 {userData.phone}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                <Calendar size={16} />
                <span>{t('dateOfBirth')}</span>
              </div>
              {isEditing ? (
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Date(userData.dob).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                <MapPin size={16} />
                <span>{t('city')}</span>
              </div>
              {isEditing ? (
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="Riyadh">{t('riyadh')}</option>
                  <option value="Jeddah">{t('jeddah')}</option>
                  <option value="Dammam">{t('dammam')}</option>
                  <option value="Mecca">{t('mecca')}</option>
                  <option value="Medina">{t('medina')}</option>
                </select>
              ) : (
                <p className="font-medium text-gray-900 dark:text-white">{t(userData.city.toLowerCase())}</p>
              )}
            </div>

          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t('totalBookings')}</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">8</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t('completed')}</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 text-center">
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">2</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t('upcoming')}</p>
          </div>
        </div>

      </div>
    </div>
  );
}