import type { StateCreator } from "zustand";

export interface authSliceType {
    isAuthenticated: boolean;
    token: string | null;
    user: {
        email: string;
        name: string;
        lastName: string;
        roles: string[];
    } | null;
    login: (userData: any) => void;
    logout: () => void;
}

export const authState: StateCreator<authSliceType> = (set) => ({
    isAuthenticated: false,
    token: null,
    user: null,

    login: (userData) => set({
        isAuthenticated: true,
        token: userData.token,
        user: {
            email: userData.email,
            name: userData.name,
            lastName: userData.lastName,
            roles: userData.roles,
        }
    }),

    logout: () => set({
        isAuthenticated: false,
        token: null,
        user: null
    }),
});
