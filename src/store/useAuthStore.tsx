import { create } from "zustand"
import { api } from "../api/http"
import { showNotification } from "@mantine/notifications"
export type User = {
  id: string
  name: string
  email: string
  password: string
  age: number
  phone: string
  role: "admin" | "user"
}

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  loading: boolean

  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (data: Omit<User, "id" | "role">) => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  login: async (email, password) => {
    set({ loading: true })
    try {
      const { data } = await api.get<User[]>(`/users?email=${email}`)

      if (!data.length) throw new Error("User not found")

      const user = data[0]

      if (user.password !== password) throw new Error("Invalid credentials")

      set({ user, isAuthenticated: true, loading: false })
      showNotification({
        title: 'Success',
        message: 'Logged in successfully',
        color: 'green',
      })
    } catch (err) {
      set({ loading: false })
      showNotification({
        title: 'Error',
        message: (err as Error).message || 'Failed to login',
        color: 'red',
      })
      throw err
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false })
  },

  register: async (formData) => {
    set({ loading: true })
    try {
      const { data } = await api.post<User>("/users", {
        ...formData,
        role: "user",
      })

      set({ user: data, isAuthenticated: true, loading: false })
      showNotification({
        title: 'Success',
        message: 'Registered successfully',
        color: 'green',
      })
    } catch (err) {
      set({ loading: false })
      throw err
      showNotification({
        title: 'Error',
        message: (err as Error).message || 'Failed to register',
        color: 'red',
      })
    }
  },
}))
