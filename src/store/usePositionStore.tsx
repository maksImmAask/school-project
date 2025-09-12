import { create } from "zustand";
import { api } from "../api/http"; 

export interface Position {
  id: string;
  title: string;
}

interface PositionsState {
  positions: Position[];
  loading: boolean;
  fetchPositions: () => Promise<void>;
  addPosition: (title: string) => Promise<void>;
  updatePosition: (id: string, title: string) => Promise<void>;
  deletePosition: (id: string) => Promise<void>;
}

export const usePositionsStore = create<PositionsState>((set) => ({
  positions: [],
  loading: false,

  fetchPositions: async () => {
    set({ loading: true });
    const res = await api.get("/positions");
    set({ positions: res.data, loading: false });
  },

  addPosition: async (title) => {
    const newPosition = { id: Date.now().toString(), title };
    await api.post("/positions", newPosition);
    set((state) => ({
      positions: [...state.positions, newPosition],
    }));
  },

  updatePosition: async (id, title) => {
    await api.patch(`/positions/${id}`, { title });
    set((state) => ({
      positions: state.positions.map((pos) =>
        pos.id === id ? { ...pos, title } : pos
      ),
    }));
  },

  deletePosition: async (id) => {
    await api.delete(`/positions/${id}`);
    set((state) => ({
      positions: state.positions.filter((pos) => pos.id !== id),
    }));
  },
}));
