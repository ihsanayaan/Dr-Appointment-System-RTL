import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Brand & Nav
      brandName: 'SehaBook',
      home: 'Home',
      services: 'Specialties',
      bookings: 'My Bookings',
      doctors: 'Doctors',
      profile: 'Profile',
      backToHome: 'Back to Home',

      // Common Actions
      bookNow: 'Book Now',
      bookAppointment: 'Book Appointment',
      continue: 'Continue',
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      viewAll: 'View all',
      shareWhatsApp: 'Share on WhatsApp',
      download: 'Download',
      goHome: 'Go to Home',

      // Home Page
      welcomeTitle: 'Book Your Health Appointment',
      welcomeSubtitle: 'Find the best doctors near you',
      searchPlaceholder: 'Search doctors, services...',
      popularCategories: 'Popular Categories',
      featuredServices: 'Featured Services',
      searchResults: 'Search Results',
      categories: 'Categories',
      noResultsFound: 'No results found',

      // Services Page
      ourServices: 'Our Services',
      searchServices: 'Search services...',
      servicesFound: 'services found',
      noServicesFound: 'No services found',
      availableServices: 'Available Services',
      backToServices: 'Back to Services',
      noServiceSelected: 'No service selected',
      browseServices: 'Browse Services',

      // Service Details
      backToDetails: 'Back to Details',
      price: 'Price',
      duration: 'Duration',
      aboutService: 'About This Service',
      serviceDescription: 'Get professional medical consultation with our certified doctors. We ensure quality care and personalized treatment for your health needs.',
      whatsIncluded: "What's Included",
      consultationWithDoctor: 'Consultation with certified doctor',
      medicalReport: 'Digital medical report',
      followUpAdvice: 'Follow-up advice',
      selectDateTime: 'Select Date & Time',

      // Services List
      generalCheckup: 'General Checkup',
      dentalCleaning: 'Dental Cleaning',
      skinConsultation: 'Skin Consultation',
      heartConsultation: 'Heart Consultation',
      childSpecialist: 'Child Specialist Visit',
      orthopedicCheckup: 'Orthopedic Checkup',
      generalPhysician: 'General Physician',
      dentist: 'Dentist',
      dermatologist: 'Dermatologist',
      cardiologist: 'Cardiologist',
      pediatrician: 'Pediatrician',
      orthopedic: 'Orthopedic',

      // Date & Time
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      date: 'Date',
      time: 'Time',
      selectDateTimeError: 'Please select both date and time',
      weekendError: 'Sorry, we are closed on Fridays',
      fridayClosed: 'Clinics are closed on Fridays in Saudi Arabia',
      am: 'AM',
      pm: 'PM',

      // User Details Form
      backToDateTime: 'Back to Date & Time',
      bookingSummary: 'Booking Summary',
      enterDetails: 'Enter Your Details',
      fullName: 'Full Name',
      namePlaceholder: 'Ahmed Mohammed',
      nameRequired: 'Name is required',
      nameMinLength: 'Name must be at least 3 characters',
      phoneNumber: 'Phone Number',
      phoneRequired: 'Phone number is required',
      phoneInvalid: 'Enter valid Saudi number: 5XXXXXXXX',
      phoneHint: "We'll send booking confirmation via SMS",
      email: 'Email Address',
      emailPlaceholder: 'ahmed@example.com',
      emailRequired: 'Email is required',
      emailInvalid: 'Enter a valid email address',
      gender: 'Gender',
      genderRequired: 'Please select gender',
      male: 'Male',
      female: 'Female',
      genderNote: 'For doctor assignment purposes',
      dateOfBirth: 'Date of Birth',
      continueToSummary: 'Continue to Summary',

      // Summary Page
      almostDone: 'Almost Done!',
      reviewConfirm: 'Please review your booking details before confirming',
      patientDetails: 'Patient Details',
      consultationFee: 'Consultation Fee',
      total: 'Total',
      cancellationNote: 'You can cancel or reschedule up to 2 hours before your appointment',
      confirmBooking: 'Confirm Booking',

      // Success Page
      bookingConfirmed: 'Booking Confirmed!',
      appointmentBooked: 'Your appointment has been successfully booked',
      bookingReference: 'Booking Reference',
      service: 'Service',
      patient: 'Patient',
      location: 'Location',
      clinicAddress: 'King Fahd Medical City, Riyadh',
      totalPaid: 'Total Paid',
      smsConfirmation: 'A confirmation SMS has been sent to your phone',

      // Calendar Page
      calendar: 'Calendar',
      selectedDate: 'Selected Date',
      fridayClosedNote: 'Clinics are closed on Fridays',

      // Profile Page
      personalInfo: 'Personal Information',
      totalBookings: 'Total Bookings',
      completed: 'Completed',
      upcoming: 'Upcoming',

      // Doctors Page
      ourDoctors: 'Our Doctors',

      // Cities
      city: 'City',
      selectCity: 'Select City',
      riyadh: 'Riyadh',
      jeddah: 'Jeddah',
      dammam: 'Dammam',
      mecca: 'Mecca',
      medina: 'Medina',

      // Specialties
      specialty: 'Specialty',
      selectSpecialty: 'Select Specialty',
      cardiology: 'Cardiology',
      dermatology: 'Dermatology',
      pediatrics: 'Pediatrics',
      orthopedics: 'Orthopedics',
      doctorGender: 'Doctor Gender',
      any: 'Any',

      // Status
      availableToday: 'Available today',
      twoSlotsLeft: '2 slots left',
      fiveSlotsAvailable: '5 slots available',

      // Units
      sar: 'SAR',
      min: 'min',
    }
  },
  ar: {
    translation: {
      // Brand & Nav
      brandName: 'صحتك',
      home: 'الرئيسية',
      services: 'التخصصات',
      bookings: 'حجوزاتي',
      doctors: 'الأطباء',
      profile: 'الملف الشخصي',
      backToHome: 'العودة للرئيسية',

      // Common Actions
      bookNow: 'احجز الآن',
      bookAppointment: 'حجز موعد',
      continue: 'متابعة',
      save: 'حفظ',
      cancel: 'إلغاء',
      edit: 'تعديل',
      viewAll: 'عرض الكل',
      shareWhatsApp: 'مشاركة واتساب',
      download: 'تحميل',
      goHome: 'العودة للرئيسية',

      // Home Page
      welcomeTitle: 'احجز موعدك الصحي',
      welcomeSubtitle: 'اعثر على أفضل الأطباء بالقرب منك',
      searchPlaceholder: 'ابحث عن الأطباء والخدمات...',
      popularCategories: 'التخصصات الشائعة',
      featuredServices: 'الخدمات المميزة',
      searchResults: 'نتائج البحث',
      categories: 'الفئات',
      noResultsFound: 'لم يتم العثور على نتائج',

      // Services Page
      ourServices: 'خدماتنا',
      searchServices: 'ابحث عن الخدمات...',
      servicesFound: 'خدمة موجودة',
      noServicesFound: 'لم يتم العثور على خدمات',
      availableServices: 'الخدمات المتاحة',
      backToServices: 'العودة للخدمات',
      noServiceSelected: 'لم يتم اختيار خدمة',
      browseServices: 'تصفح الخدمات',

      // Service Details
      backToDetails: 'العودة للتفاصيل',
      price: 'السعر',
      duration: 'المدة',
      aboutService: 'عن هذه الخدمة',
      serviceDescription: 'احصل على استشارة طبية احترافية مع أطبائنا المعتمدين. نضمن لك رعاية عالية الجودة وعلاج شخصي لاحتياجاتك الصحية.',
      whatsIncluded: 'ما يشمل',
      consultationWithDoctor: 'استشارة مع طبيب معتمد',
      medicalReport: 'تقرير طبي رقمي',
      followUpAdvice: 'نصائح المتابعة',
      selectDateTime: 'اختر التاريخ والوقت',

      // Services List
      generalCheckup: 'فحص عام',
      dentalCleaning: 'تنظيف الأسنان',
      skinConsultation: 'استشارة جلدية',
      heartConsultation: 'استشارة قلب',
      childSpecialist: 'زيارة طبيب أطفال',
      orthopedicCheckup: 'فحص العظام',
      generalPhysician: 'طبيب عام',
      dentist: 'طبيب أسنان',
      dermatologist: 'طبيب جلدية',
      cardiologist: 'طبيب قلب',
      pediatrician: 'طبيب أطفال',
      orthopedic: 'طبيب عظام',

      // Date & Time
      selectDate: 'اختر التاريخ',
      selectTime: 'اختر الوقت',
      date: 'التاريخ',
      time: 'الوقت',
      selectDateTimeError: 'يرجى اختيار التاريخ والوقت',
      weekendError: 'عذراً، نحن مغلقون يوم الجمعة',
      fridayClosed: 'العيادات مغلقة يوم الجمعة في السعودية',
      am: 'ص',
      pm: 'م',

      // User Details Form
      backToDateTime: 'العودة للتاريخ والوقت',
      bookingSummary: 'ملخص الحجز',
      enterDetails: 'أدخل بياناتك',
      fullName: 'الاسم الكامل',
      namePlaceholder: 'أحمد محمد',
      nameRequired: 'الاسم مطلوب',
      nameMinLength: 'يجب أن يكون الاسم 3 أحرف على الأقل',
      phoneNumber: 'رقم الجوال',
      phoneRequired: 'رقم الجوال مطلوب',
      phoneInvalid: 'أدخل رقم سعودي صحيح: 5XXXXXXXX',
      phoneHint: 'سنرسل تأكيد الحجز عبر الرسائل',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'ahmed@example.com',
      emailRequired: 'البريد الإلكتروني مطلوب',
      emailInvalid: 'أدخل بريد إلكتروني صحيح',
      gender: 'الجنس',
      genderRequired: 'يرجى اختيار الجنس',
      male: 'ذكر',
      female: 'أنثى',
      genderNote: 'لغرض تعيين الطبيب المناسب',
      dateOfBirth: 'تاريخ الميلاد',
      continueToSummary: 'متابعة للملخص',

      // Summary Page
      almostDone: 'أوشكت على الانتهاء!',
      reviewConfirm: 'يرجى مراجعة تفاصيل الحجز قبل التأكيد',
      patientDetails: 'بيانات المريض',
      consultationFee: 'رسوم الاستشارة',
      total: 'الإجمالي',
      cancellationNote: 'يمكنك الإلغاء أو إعادة الجدولة قبل الموعد بساعتين',
      confirmBooking: 'تأكيد الحجز',

      // Success Page
      bookingConfirmed: 'تم تأكيد الحجز!',
      appointmentBooked: 'تم حجز موعدك بنجاح',
      bookingReference: 'رقم الحجز',
      service: 'الخدمة',
      patient: 'المريض',
      location: 'الموقع',
      clinicAddress: 'مدينة الملك فهد الطبية، الرياض',
      totalPaid: 'المبلغ المدفوع',
      smsConfirmation: 'تم إرسال رسالة تأكيد إلى جوالك',

      // Calendar Page
      calendar: 'التقويم',
      selectedDate: 'التاريخ المحدد',
      fridayClosedNote: 'العيادات مغلقة يوم الجمعة',

      // Profile Page
      personalInfo: 'المعلومات الشخصية',
      totalBookings: 'إجمالي الحجوزات',
      completed: 'مكتمل',
      upcoming: 'القادمة',

      // Doctors Page
      ourDoctors: 'أطباؤنا',

      // Cities
      city: 'المدينة',
      selectCity: 'اختر المدينة',
      riyadh: 'الرياض',
      jeddah: 'جدة',
      dammam: 'الدمام',
      mecca: 'مكة',
      medina: 'المدينة المنورة',

      // Specialties
      specialty: 'التخصص',
      selectSpecialty: 'اختر التخصص',
      cardiology: 'أمراض القلب',
      dermatology: 'الجلدية',
      pediatrics: 'طب الأطفال',
      orthopedics: 'العظام',
      doctorGender: 'جنس الطبيب',
      any: 'الكل',

      // Status
      availableToday: 'متاح اليوم',
      twoSlotsLeft: 'متبقي موعدين',
      fiveSlotsAvailable: '5 مواعيد متاحة',

      // Units
      sar: 'ريال',
      min: 'دقيقة',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    lng: 'ar',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;