import { create } from "zustand";
import { api } from "../api/http";
import { showNotification } from "@mantine/notifications";
import type { lang } from "../types/lang";

export type Rule = {
  id: string;
  title: lang;
  desc: lang;
};

type RulesStore = {
  rules: Rule[];
  loading: boolean;
  error: string | null;

  fetchRules: () => Promise<void>;
  getRule: (id: string) => Promise<Rule | null>;
  addRule: (rule: Omit<Rule, "id">) => Promise<void>;
  updateRule: (id: string, rule: Partial<Omit<Rule, "id">>) => Promise<void>;
  deleteRule: (id: string) => Promise<void>;
};

export const useRulesStore = create<RulesStore>((set) => ({
  rules: [],
  loading: false,
  error: null,

  fetchRules: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Rule[]>("/rules");
      set({ rules: data });
    } catch (err) {
      console.error(err);
      set({ error: "Ошибка при получении правил" });
    } finally {
      set({ loading: false });
    }
  },

  getRule: async (id) => {
    try {
      const { data } = await api.get<Rule>(`/rules/${id}`);
      return data;
    } catch {
      return null;
    }
  },

  addRule: async (rule) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post<Rule>("/rules", rule);
      set((state) => ({ rules: [...state.rules, data] }));

      showNotification({
        title: "Правило создано",
        message: `Правило успешно создано`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось создать правило",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },

  updateRule: async (id, rule) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put<Rule>(`/rules/${id}`, rule);
      set((state) => ({
        rules: state.rules.map((r) => (r.id === id ? data : r)),
      }));

      showNotification({
        title: "Правило обновлено",
        message: `Правило успешно обновлено`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось обновить правило",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },

  deleteRule: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/rules/${id}`);

      set((state) => ({
        rules: state.rules.filter((r) => r.id !== id),
      }));

      showNotification({
        title: "Правило удалено",
        message: `Правило успешно удалено`,
        color: "green",
      });
    } catch (err) {
      console.error(err);
      showNotification({
        title: "Ошибка",
        message: "Не удалось удалить правило",
        color: "red",
      });
    } finally {
      set({ loading: false });
    }
  },
}));

useRulesStore.getState().fetchRules();
