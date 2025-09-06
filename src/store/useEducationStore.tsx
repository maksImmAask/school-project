import { create } from "zustand";
import { api } from "../api/http";
import { showNotification } from "@mantine/notifications";

export type Education = {
  id: string;
  title: string;
  desc: string;
  date: string;
  startTime: string;
  endTime: string;
};

export type CreateEducation = {
  title: string;
  desc: string;
  date: string;
  startTime: string;
  endTime: string;
};

type EducationStore = {
  educations: Education[];
  loading: boolean;
  error: string | null;

  fetchEducations: () => Promise<void>;
  getEducation: (id: string) => Promise<Education | null>;
  addEducation: (education: CreateEducation) => Promise<void>;
  updateEducation: (id: string, education: Partial<CreateEducation>) => Promise<void>;
  deleteEducation: (id: string) => Promise<void>;
};

export const useEducationStore = create<EducationStore>((set) => ({
  educations: [],
  loading: false,
  error: null,

  fetchEducations: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Education[]>("/educations");
      set({ educations: data });
    } catch (err) {
      console.error(err);
      set({ error: "Ошибка при получении обучений" });
    } finally {
      set({ loading: false });
    }
  },

  getEducation: async (id) => {
    try {
      const { data } = await api.get<Education>(`/educations/${id}`);
      return data;
    } catch {
      return null;
    }
  },

  addEducation: async (education) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post<Education>("/educations", education);
      set((state) => ({ educations: [...state.educations, data] }));

      showNotification({
        title: "Обучение создано",
        message: `Обучение "${data.title}" успешно создано`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось создать обучение",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },

  updateEducation: async (id, education) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put<Education>(`/educations/${id}`, education);
      set((state) => ({
        educations: state.educations.map((e) => (e.id === id ? data : e)),
      }));

      showNotification({
        title: "Обучение обновлено",
        message: `Обучение "${data.title}" успешно обновлено`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось обновить обучение",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },

  deleteEducation: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/educations/${id}`);
      set((state) => ({
        educations: state.educations.filter((e) => e.id !== id),
      }));

      showNotification({
        title: "Обучение удалено",
        message: `Обучение успешно удалено`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось удалить обучение",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },
}));
