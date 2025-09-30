
import { create } from "zustand";
import { api } from "../api/http";
import type { lang } from "../types/lang";

export type Event = {
  id: string;
  title: lang;        
  place: lang;       
  date: string;    
};

type EventsStore = {
  events: Event[];
  loading: boolean;
  error: string | null;

  fetchEvents: () => Promise<void>;
  getEvent: (id: string) => Promise<Event | null>;
  addEvent: (event: Omit<Event, "id">) => Promise<void>;
  updateEvent: (id: string, event: Partial<Omit<Event, "id">>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
};
export const useEventsStore = create<EventsStore>((set) => ({
  events: [],
  loading: false,
  error: null,
  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Event[]>("/events");
      set({ events: data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось загрузить события", loading: false });
    }
  },

  getEvent: async (id) => {
    try {
      const { data } = await api.get<Event>(`/events/${id}`);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  addEvent: async (event) => {
    try {
      const { data } = await api.post<Event>("/events", event);
      set((state) => ({
        events: [...state.events, data],
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось добавить событие" });
    }
  },

  updateEvent: async (id, event) => {
    try {
      const { data } = await api.put<Event>(`/events/${id}`, event);
      set((state) => ({
        events: state.events.map((e) => (e.id === id ? data : e)),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось обновить событие" });
    }
  },

  deleteEvent: async (id) => {
    try {
      await api.delete(`/events/${id}`);
      set((state) => ({
        events: state.events.filter((e) => e.id !== id),
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Не удалось удалить событие" });
    }
  },
}));
