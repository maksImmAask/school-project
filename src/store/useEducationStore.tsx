import { create } from "zustand";
import { api } from "../api/http";
import type { lang } from "../types/lang";

export type Education = {
  id: string;
  title: lang;
  desc: lang;
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
  addEducation: (education: Omit<Education, "id">) => Promise<void>;
  updateEducation: (id: string, education: Partial<Omit<Education, "id">>) => Promise<void>;
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
      set({ educations: data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось загрузить обучения", loading: false });
    }
  },

  getEducation: async (id) => {
    try {
      const { data } = await api.get<Education>(`/educations/${id}`);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  addEducation: async (education) => {
    try {
      const { data } = await api.post<Education>("/educations", education);
      set((state) => ({
        educations: [...state.educations, data],
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось добавить обучение" });
    }
  },

  updateEducation: async (id, education) => {
    try {
      const { data } = await api.put<Education>(`/educations/${id}`, education);
      set((state) => ({
        educations: state.educations.map((e) => (e.id === id ? data : e)),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось обновить обучение" });
    }
  },

  deleteEducation: async (id) => {
    try {
      await api.delete(`/educations/${id}`);
      set((state) => ({
        educations: state.educations.filter((e) => e.id !== id),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось удалить обучение" });
    }
  },
}));
