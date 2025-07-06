import { create } from 'zustand'

type UIState = {
    isLoggedIn: boolean,
}

export const useUIStore = create<UIState>((_set) => ({
    isLoggedIn: false,
}))