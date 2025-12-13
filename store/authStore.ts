import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  currentUserEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      currentUserEmail: null,
      login: (email: string) => {
        set({ isLoggedIn: true, currentUserEmail: email });
      },
      logout: () => {
        set({ isLoggedIn: false, currentUserEmail: null });
      },
    }),
    {
      name: 'auth-store',
    }
  )
);
