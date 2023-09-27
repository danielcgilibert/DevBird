//DEPENDENCIES
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  name: string
  email: string
  username: string
  token: string
}
type State = {
  isAuthenticated: boolean
  user: User | null
}

type Actions = {
  login: (user: User) => void
  logout: () => void
  setAuthentication: (val: boolean) => void
}

export const authStore = create(
  persist<State & Actions>(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      login: (user: User) => set({ user }),
      logout: () => {
        set({ user: null })
        set({ isAuthenticated: false })
        localStorage.removeItem('auth-storage')
      },
      setAuthentication: (val: boolean) => set({ isAuthenticated: val })
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
      skipHydration: true
    }
  )
)
