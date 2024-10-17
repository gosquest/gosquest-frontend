import { create } from "zustand";

interface User {
   id: string;
   fullName: string;
   email: string;
   role: string;
}

interface AuthState {
   user: User | null;
   roles: string[];
   setUser: (data: User | null) => void;
   setRoles: (data: string[]) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
   user: null,
   roles: [],
   setUser: (data: User | null) => set({ user: data }),
   setRoles: (data: string[]) => set({ roles: data }),
}));
