import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware'; // 
import { authState, type authSliceType } from './authSlice';
import { bookState, type bookSliceType } from './bookSlice';
import { fineState, type fineSliceType } from './fineSlice';

type CombinedState = authSliceType & bookSliceType & fineSliceType

export const useAppStore = create<CombinedState>()(devtools(
  persist(
    (...a) => ({
      ...authState(...a),
      ...bookState(...a),
      ...fineState(...a)
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        ...state,
        notification: undefined,
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        user: state.user,
      })
    },
  ),
));