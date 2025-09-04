import { create } from "zustand";
import { api } from "../api/api";

export type Owner = {
  id: string;
  name: string;
  surname: string;
  job: string;
  desc: string;
};

type OwnersStore = {
  owners: Owner[];
  loading: boolean;
  error: string | null;

  fetchOwners: () => Promise<void>;
  getOwner: (id: string) => Promise<Owner | null>;
  addOwner: (owner: Omit<Owner, "id">) => Promise<void>;
  updateOwner: (id: string, owner: Partial<Omit<Owner, "id">>) => Promise<void>;
  deleteOwner: (id: string) => Promise<void>;
};

export const useOwnersStore = create<OwnersStore>((set) => ({
  owners: [],
  loading: false,
  error: null,

  fetchOwners: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Owner[]>("/school-leaders");
      set({ owners: data });
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось загрузить владельцев" });
    } finally {
      set({ loading: false });
    }
  },

  getOwner: async (id) => {
    try {
      const { data } = await api.get<Owner>(`/school-leaders/${id}`);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  addOwner: async (owner) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post<Owner>("/school-leaders", owner);
      set((state) => ({
        owners: [...state.owners, data],
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось добавить владельца" });
    } finally {
      set({ loading: false });
    }
  },

  updateOwner: async (id, owner) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put<Owner>(`/school-leaders/${id}`, owner);
      set((state) => ({
        owners: state.owners.map((o) => (o.id === id ? data : o)),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось обновить владельца" });
    } finally {
      set({ loading: false });
    }
  },

  deleteOwner: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/owners/${id}`);
      set((state) => ({
        owners: state.owners.filter((o) => o.id !== id),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось удалить владельца" });
    } finally {
      set({ loading: false });
    }
  },
}));
useOwnersStore.getState().fetchOwners();
