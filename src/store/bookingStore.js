import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBooking = create(
  persist(
    (set) => ({
      // State
      service: null,
      date: null,
      time: null,
      user: {},
      language: 'ar', // Saudi default Arabic
      
      // Actions
      setService: (service) => set({ service }),
      setDate: (date) => set({ date }),
      setTime: (time) => set({ time }),
      setUser: (user) => set({ user }),
      setLanguage: (language) => set({ language }),
      
      // Reset all
      reset: () => set({ 
        service: null, 
        date: null, 
        time: null, 
        user: {},
        // language reset nahi karna - user preference hai
      }),

      // Reset only booking data
      resetBooking: () => set({ 
        service: null, 
        date: null, 
        time: null 
      }),
    }),
    {
      name: 'sehabook-storage', // localStorage key
      partialize: (state) => ({
        // Sirf ye fields save karna localStorage mein
        language: state.language,
        user: state.user,
      }),
    }
  )
);