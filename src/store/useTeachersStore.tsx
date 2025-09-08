import { create } from "zustand";
import { api } from "../api/http";

type Teacher = {
  id: string;       
  firstName: string; 
  lastName: string; 
  subject: string;   
  avatar: string;   
};

type TeachersStore = {
  teachers: Teacher[];
  loading: boolean;
  error: string | null;

  fetchTeachers: () => Promise<void>;
  addTeacher: (newTeacher: Omit<Teacher, "id">) => Promise<void>;
  updateTeacher: (id: string, updatedData: Partial<Teacher>) => Promise<void>;
  deleteTeacher: (id: string) => Promise<void>;
};

export const useTeachersStore = create<TeachersStore>((set) => ({
  teachers: [],
  loading: false,
  error: null,

  fetchTeachers: async () => {
    try {
      set({ loading: true, error: null });
      const { data } = await api.get<Teacher[]>("/teachers");
      set({ teachers: data, loading: false });
    } catch (err) {
      console.error("Ошибка при получении списка учителей:", err);
      set({ loading: false, error: "Не удалось загрузить учителей" });
    }
  },

  addTeacher: async (newTeacher) => {
    try {
      set({ loading: true, error: null });
      const { data } = await api.post<Teacher>("/teachers", newTeacher);
      set((state) => ({
        teachers: [...state.teachers, data],
        loading: false,
      }));
    } catch (err) {
      console.error("Ошибка при добавлении учителя:", err);
      set({ loading: false, error: "Не удалось добавить учителя" });
    }
  },

  updateTeacher: async (id, updatedData) => {
    try {
      set({ loading: true, error: null });
      const { data } = await api.patch<Teacher>(`/teachers/${id}`, updatedData);
      set((state) => ({
        teachers: state.teachers.map((teacher) =>
          teacher.id === id ? data : teacher
        ),
        loading: false,
      }));
    } catch (err) {
      console.error("Ошибка при обновлении учителя:", err);
      set({ loading: false, error: "Не удалось обновить данные учителя" });
    }
  },

  deleteTeacher: async (id) => {
    try {
      set({ loading: true, error: null });
      await api.delete(`/teachers/${id}`);
      set((state) => ({
        teachers: state.teachers.filter((teacher) => teacher.id !== id),
        loading: false,
      }));
    } catch (err) {
      console.error("Ошибка при удалении учителя:", err);
      set({ loading: false, error: "Не удалось удалить учителя" });
    }
  },
}));
