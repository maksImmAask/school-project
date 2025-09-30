import { create } from "zustand";
import { api } from "../api/http";
import { showNotification } from "@mantine/notifications";
import type { lang } from "../types/lang";
export type Faculty = {
  id: string;
  name: lang;
  desc: lang;
};

type FacultiesStore = {
  faculties: Faculty[];
  loading: boolean;
  error: string | null;

  fetchFaculties: () => Promise<void>;
  getFaculty: (id: string) => Promise<Faculty | null>;
  addFaculty: (faculty: Omit<Faculty, "id">) => Promise<void>;
  updateFaculty: (id: string, faculty: Partial<Omit<Faculty, "id">>) => Promise<void>;
  deleteFaculty: (id: string) => Promise<void>;
};

export const useFacultiesStore = create<FacultiesStore>((set) => ({

  faculties: [],
  loading: false,
  error: null,

  fetchFaculties: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Faculty[]>("/faculties");
      set({ faculties: data });
    } catch (err) {
      console.error(err);
      set({ error: "Ошибка при получении факультетов" });
    } finally {
      set({ loading: false });
    }
  },

  getFaculty: async (id) => {
    try {
      const { data } = await api.get<Faculty>(`/faculties/${id}`);
      return data;
    } catch {
      return null;
    }
  },

  addFaculty: async (faculty) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post<Faculty>("/faculties", faculty);
      set((state) => ({ faculties: [...state.faculties, data] }));

      showNotification({
        title: "Факультет создан",
        message: `Факультет успешно создан`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось создать факультет",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },

  updateFaculty: async (id, faculty) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put<Faculty>(`/faculties/${id}`, faculty);
      set((state) => ({
        faculties: state.faculties.map((f) => (f.id === id ? data : f)),
      }));

      showNotification({
        title: "Факультет обновлен",
        message: `Факультет   успешно обновлен`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось обновить факультет",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },
deleteFaculty: async (id: string) => {
  set({ loading: true, error: null });
  try {
    await api.delete(`/faculties/${id}`);

    set((state) => ({
      faculties: state.faculties.filter((f) => f.id !== id),
    }));

    showNotification({
      title: "Факультет удален",
      message: `Факультет успешно удален`,
      color: "green",
    });
  } catch (err) {
    console.error(err);
    showNotification({
      title: "Ошибка",
      message: "Не удалось удалить факультет",
      color: "red",
    });
  } finally {
    set({ loading: false });
  }
},
}));

useFacultiesStore.getState().fetchFaculties();
