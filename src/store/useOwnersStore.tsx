import { create } from "zustand";
import { api } from "../api/http";

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
      const { data } = await api.get<Owner[]>("/owners");
      set({ owners: data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось загрузить владельцев", loading: false });
    }
  },

  getOwner: async (id) => {
    try {
      const { data } = await api.get<Owner>(`/owners/${id}`);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  addOwner: async (owner) => {
    try {
      const { data } = await api.post<Owner>("/owners", owner);
      set((state) => ({
        owners: [...state.owners, data],
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось добавить владельца" });
    }
  },

  updateOwner: async (id, owner) => {
    try {
      const { data } = await api.put<Owner>(`/owners/${id}`, owner);
      set((state) => ({
        owners: state.owners.map((o) => (o.id === id ? data : o)),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось обновить владельца" });
    }
  },

  deleteOwner: async (id) => {
    try {
      await api.delete(`/ownersф/${id}`);
      set((state) => ({
        owners: state.owners.filter((o) => o.id !== id),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось удалить владельца" });
    }
  },
}));

useOwnersStore.getState().fetchOwners();
