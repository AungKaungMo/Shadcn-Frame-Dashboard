import { create } from "zustand";
import { storage } from "@/service/storage";

interface AuthState {
  user: {
    id: number;
    name: string; 
    role: string[];
    token: string;
  };
  setUser: (user: Partial<AuthState["user"]>) => void;
  getUser: () => { id: number; name: string; role: string[]; token: string } | null;
  logout: () => void;
}

const initialUser: AuthState["user"] = {
  id: 0,
  name: "",
  role: [],
  token: "",
};

export const useAuthStore = create<AuthState>((set) => ({
  user: initialUser,
  setUser: (user) => {
    if (user?.token) {
      storage().setItem("user", JSON.stringify(user));
    }
    set((state) => ({
      user: { ...state.user, ...user }, 
    }));
  },
  getUser: () => {
    const user = storage().getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  logout: () => {
    storage().removeItem('user');
    set({ user: initialUser })
  }
}));
