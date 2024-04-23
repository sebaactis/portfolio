import { create } from 'zustand'

type Store = {
    language: boolean
    changeLanguage: () => void
}

export const useLanguage = create<Store>()((set) => ({
    language: true,
    changeLanguage: () => set((state) => ({ language: !state.language })),
}))