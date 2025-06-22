import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware'; // 
import { authState, type authSliceType } from './authSlice';

type CombinedState = authSliceType

export const useAppStore = create<CombinedState>()(devtools(
  persist(
    (...a) => ({
      ...authState(...a)
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        ...state,
        notification: undefined 
      })
    },
  ),
));