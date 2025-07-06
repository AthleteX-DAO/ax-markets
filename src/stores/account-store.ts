import { create } from 'zustand'

type AccountState = {
    userName: string,
    publicAddress: string, 
    changeUsername: () => void
}

export const useAccountStore = create<AccountState>((set) => ({
    userName: "Math",
    publicAddress: "0x000000000000000000",
    changeUsername: () => set((_state) => ({ userName: "NewUsername" }))
}))