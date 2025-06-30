import type { StateCreator } from "zustand";
import { finesBooks } from "../Services/bookServices";
import type { fineType } from "../types";

export interface fineSliceType {
  fines: fineType[];
  finesBook: (email: string) => Promise<void>;
}

export const fineState: StateCreator<fineSliceType> = (set) => ({
  fines: [],
  finesBook: async (email: string) => {
    try {
      const data = await finesBooks(email);
      set({ fines: data });
    } catch (error) {
      console.error("Error al obtener las multas:", error);
    }
  },
});
