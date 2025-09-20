import { create } from "zustand";
import { api } from "../api/http";
import type { lang } from "../types/lang";

export interface Position {
  id: string;
  title: lang;
}

interface PositionsState {
  positions: Position[];
  loading: boolean;
  fetchPositions: () => Promise<void>;
  getPositionById: (id: string) => Promise<Position | null>;
  addPosition: (title: lang) => Promise<void>;
  updatePosition: (id: string, title: lang) => Promise<void>;
  deletePosition: (id: string) => Promise<void>;
}

export const usePositionsStore = create<PositionsState>((set) => ({
  positions: [],
  loading: false,

  fetchPositions: async () => {
    set({ loading: true });
    try {
      const res = await api.get<Position[]>("/positions");
      set({ positions: res.data, loading: false });
    } catch (error) {
      console.error("Ошибка при получении списка должностей:", error);
      set({ loading: false });
    }
  },

  getPositionById: async (id) => {
    try {
      const res = await api.get<Position>(`/positions/${id}`);
      return res.data;
    } catch (error) {
      console.error("Ошибка при получении должности по ID:", error);
      return null;
    }
  },

  addPosition: async (title) => {
    try {
      const res = await api.post<Position>("/positions", { title });
      set((state) => ({
        positions: [...state.positions, res.data],
      }));
    } catch (error) {
      console.error("Ошибка при добавлении должности:", error);
    }
  },

  updatePosition: async (id, title) => {
    try {
      const res = await api.patch<Position>(`/positions/${id}`, { title });
      set((state) => ({
        positions: state.positions.map((pos) =>
          pos.id === id ? res.data : pos
        ),
      }));
    } catch (error) {
      console.error("Ошибка при обновлении должности:", error);
    }
  },

  deletePosition: async (id) => {
    try {
      await api.delete(`/positions/${id}`);
      set((state) => ({
        positions: state.positions.filter((pos) => pos.id !== id),
      }));
    } catch (error) {
      console.error("Ошибка при удалении должности:", error);
    }
  },
}));
