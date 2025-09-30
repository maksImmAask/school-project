import { create } from "zustand";
import { api } from "../api/http";
import { showNotification } from "@mantine/notifications";
import type { lang } from "../types/lang";

export type Question = {
  id: string;
  question: lang;
  answer: lang;
};

type QuestionsStore = {
  questions: Question[];
  loading: boolean;
  error: string | null;

  fetchQuestions: () => Promise<void>;
  getQuestion: (id: string) => Promise<Question | null>;
  addQuestion: (question: Omit<Question, "id">) => Promise<void>;
  updateQuestion: (id: string, question: Partial<Omit<Question, "id">>) => Promise<void>;
  deleteQuestion: (id: string) => Promise<void>;
};

export const useQuestionsStore = create<QuestionsStore>((set) => ({
  questions: [],
  loading: false,
  error: null,

  fetchQuestions: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Question[]>("/questions");
      set({ questions: data });
    } catch (err) {
      console.error(err);
      set({ error: "Ошибка при получении вопросов" });
    } finally {
      set({ loading: false });
    }
  },

  getQuestion: async (id) => {
    try {
      const { data } = await api.get<Question>(`/questions/${id}`);
      return data;
    } catch {
      return null;
    }
  },

  addQuestion: async (question) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post<Question>("/questions", question);
      set((state) => ({ questions: [...state.questions, data] }));

      showNotification({
        title: "Вопрос создан",
        message: "Вопрос успешно создан",
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось создать вопрос",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },

  updateQuestion: async (id, question) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put<Question>(`/questions/${id}`, question);
      set((state) => ({
        questions: state.questions.map((q) => (q.id === id ? data : q)),
      }));

      showNotification({
        title: "Вопрос обновлён",
        message: "Вопрос успешно обновлён",
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось обновить вопрос",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },

  deleteQuestion: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/questions/${id}`);

      set((state) => ({
        questions: state.questions.filter((q) => q.id !== id),
      }));

      showNotification({
        title: "Вопрос удалён",
        message: "Вопрос успешно удалён",
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось удалить вопрос",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },
}));

useQuestionsStore.getState().fetchQuestions();
