import type { StateCreator } from "zustand";
import type { bookingType } from "../types";

export interface bookingSliceType {
  booking: bookingType[];
  setBooking: (bookings: bookingType[]) => void;
}

export const bookingState: StateCreator<bookingSliceType> = (set) => ({
  booking: [],
  setBooking: (bookings) => set({ booking: bookings }),
});
