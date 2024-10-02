import { create } from "zustand";

interface store {
    user: any,
    roles: any,
    setUser: (data: any) => void
    setRoles: (data: any) => void
}

export const useAuthStore = create<store>((set) => ({
    user: null,
    roles: null,
    setUser: (data: any) => {
        set({ user: data })
    },
    setRoles: (data: any) => {
        set({ roles: data })
    }
}))