import { create } from "zustand";
import { api } from "../api/http";
import type { lang } from "../types/lang";

export type NewsItem = {
  id: string;
  title: lang;
  desc: lang;
  img: string;
  date: string;
};

type NewsStore = {
  news: NewsItem[];
  currentNews: NewsItem | null;
  loading: boolean;
  error: string | null;

  fetchNews: () => Promise<void>;
  getNewsItem: (id: string) => Promise<NewsItem | null>;
  addNewsItem: (news: Omit<NewsItem, "id">) => Promise<void>;
  updateNewsItem: (id: string, news: Partial<Omit<NewsItem, "id">>) => Promise<void>;
  deleteNewsItem: (id: string) => Promise<void>;
};

export const useNewsStore = create<NewsStore>((set) => ({
  news: [],
  currentNews: null,
  loading: false,
  error: null,

  fetchNews: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<NewsItem[]>("/news");
      set({ news: data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось загрузить новости", loading: false });
    }
  },

  getNewsItem: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<NewsItem>(`/news/${id}`);
      set({ currentNews: data, loading: false });
      return data; 
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось загрузить новость", loading: false });
      return null;
    }
  },

  addNewsItem: async (news) => {
    try {
      const { data } = await api.post<NewsItem>("/news", news);
      set((state) => ({
        news: [...state.news, data],
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось добавить новость" });
    }
  },

updateNewsItem: async (id, news) => {
    try {
      const { data } = await api.put<NewsItem>(`/news/${id}`, news);
      set((state) => ({
        news: state.news.map((n) => (n.id === id ? data : n)),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось обновить новость" });
    }
  },

  deleteNewsItem: async (id) => {
    try {
      await api.delete(`/news/${id}`);
      set((state) => ({
        news: state.news.filter((n) => n.id !== id),
        currentNews: state.currentNews?.id === id ? null : state.currentNews,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось удалить новость" });
    }
  },
}));