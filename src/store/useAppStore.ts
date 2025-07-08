import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware'; // 
import { authState, type authSliceType } from './authSlice';
import { bookState, type bookSliceType } from './bookSlice';
import { fineState, type fineSliceType } from './fineSlice';
import { bookingState, type bookingSliceType } from './bookingSlice';

type CombinedState = authSliceType & bookSliceType & fineSliceType & bookingSliceType

export const useAppStore = create<CombinedState>()(devtools(
  persist(
    (...a) => ({
      ...authState(...a),
      ...bookState(...a),
      ...fineState(...a),
      ...bookingState(...a),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        user: state.user
      })

    },
  ),
));