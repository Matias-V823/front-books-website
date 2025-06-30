import type { StateCreator } from "zustand";
import type { bookingType } from "../types";
import { bookingBooks } from "../Services/bookServices";

export interface bookingSliceType {
  booking: bookingType[];
  bookingBooks: (email : string) => Promise<void>;
}

export const bookingState: StateCreator<bookingSliceType> = (set) => ({
  booking: [],
  bookingBooks: async (email : string) => {
    try {
      const data = await bookingBooks(email);
      set({ booking: data });
    } catch (error) {
      console.error("Error al obtener las multas:", error);
    }
  },
});
