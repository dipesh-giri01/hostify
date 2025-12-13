import { create } from 'zustand';

export interface SearchState {
  accommodation: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  setAccommodation: (value: string) => void;
  setCheckIn: (value: string) => void;
  setCheckOut: (value: string) => void;
  setGuests: (value: string) => void;
  resetSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  accommodation: '',
  checkIn: '',
  checkOut: '',
  guests: '',
  setAccommodation: (value: string) => set({ accommodation: value }),
  setCheckIn: (value: string) => set({ checkIn: value }),
  setCheckOut: (value: string) => set({ checkOut: value }),
  setGuests: (value: string) => set({ guests: value }),
  resetSearch: () =>
    set({
      accommodation: '',
      checkIn: '',
      checkOut: '',
      guests: '',
    }),
}));
