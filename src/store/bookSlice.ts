import type { StateCreator } from "zustand";
import { getBooks } from "../Services/bookServices";
import type { bookType } from "../types";

export interface bookSliceType {
  books: bookType[];
  getBooks: () => Promise<void>;
}

export const bookState: StateCreator<bookSliceType> = (set) => ({
  books: [],
  getBooks: async () => {
    try {
      const data = await getBooks();
      set({ books: data });
    } catch (error) {
      console.error("Error get books:", error);
    }
  },
});
