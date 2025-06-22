import type { StateCreator } from "zustand";

export interface authSliceType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const authState: StateCreator<authSliceType> = (set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
})