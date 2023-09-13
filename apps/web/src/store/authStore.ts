//DEPENDENCIES
import { create } from 'zustand'

interface State {
  user: {
    name: string
    email: string
    username: string
  } | null
  setUser: (user: any) => void
}

export const authStore = create<State>((set) => ({
  user: null,
  setUser: (user: any) => set({ user: user })
}))
