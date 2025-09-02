import { create } from "zustand"
import { api } from "../api/api"

export type User = {
  id: string
  name: string
  email: string
  password: string
  age: number
  phone: string
  role: string
}

export type CreateUser = {
  name: string
  email: string
  password: string
  age: number
  phone: string
}

type UsersStore = {
  users: User[]
  loading: boolean
  error: string | null

  fetchUsers: () => Promise<void>
  getUser: (id: string) => Promise<User | null>
  addUser: (user: CreateUser) => Promise<void>
  updateUser: (id: string, user: Partial<CreateUser>) => Promise<void>
  deleteUser: (id: string) => Promise<void>
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null })
    try {
      const { data } = await api.get<User[]>("/users")
      set({ users: data })
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false })
    }
  },

  getUser: async (id) => {
    try {
      const { data } = await api.get<User>(`/users/${id}`)
      return data
    } catch {
      return null
    }
  },

  addUser: async (user) => {
    set({ loading: true, error: null })
    try {
      const { data } = await api.post<User>("/users", user)
      set((state) => ({ users: [...state.users, data] }))
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false })
    }
  },

  updateUser: async (id, user) => {
    set({ loading: true, error: null })
    try {
      const { data } = await api.put<User>(`/users/${id}`, user)
      set((state) => ({
        users: state.users.map((u) => (u.id === id ? data : u)),
      }))
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false })
    }
  },

  deleteUser: async (id) => {
    set({ loading: true, error: null })
    try {
      await api.delete(`/users/${id}`)
      set((state) => ({
        users: state.users.filter((u) => u.id !== id),
      }))
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false })
    }
  },
}))
