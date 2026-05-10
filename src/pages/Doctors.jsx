// pages/Doctors.jsx
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Stethoscope, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Doctors() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmed Ali",
      nameAr: "د. أحمد علي",
      specialty: "Cardiology",
      specialtyAr: "أمراض القلب",
      rating: 4.9,
      experience: "15 years",
      experienceAr: "15 سنة",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      name: "Dr. Fatima Hassan",
      nameAr: "د. فاطمة حسن",
      specialty: "Dermatology",
      specialtyAr: "الأمراض الجلدية",
      rating: 4.8,
      experience: "12 years",
      experienceAr: "12 سنة",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      name: "Dr. Mohammed Saleh",
      nameAr: "د. محمد صالح",
      specialty: "Orthopedics",
      specialtyAr: "جراحة العظام",
      rating: 4.9,
      experience: "20 years",
      experienceAr: "20 سنة",
      image: "https://i.pravatar.cc/150?img=33"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowLeft size={18} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
          {t('backToHome')}
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <Stethoscope className="text-blue-600" />
          {t('ourDoctors')}
        </h1>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {i18n.language === 'ar' ? doctor.nameAr : doctor.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {i18n.language === 'ar' ? doctor.specialtyAr : doctor.specialty}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{doctor.rating}</span>
                  </div>
                  <span>{i18n.language === 'ar' ? doctor.experienceAr : doctor.experience}</span>
                </div>

                <button
                  onClick={() => navigate('/services')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  {t('bookAppointment')}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}