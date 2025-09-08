import { create } from "zustand";
import { api } from "../api/http";

export type GalleryItem = {
  id: string;       
  title: string;    
  img: string;      
};
type GalleryStore = {
  gallery: GalleryItem[];
  loading: boolean;
  error: string | null;

  fetchGallery: () => Promise<void>;
  addGalleryItem: (newItem: Omit<GalleryItem, "id">) => Promise<void>;
  updateGalleryItem: (id: string, updatedData: Partial<GalleryItem>) => Promise<void>;
  deleteGalleryItem: (id: string) => Promise<void>;
};

export const useGalleryStore = create<GalleryStore>((set) => ({
  gallery: [],
  loading: false,
  error: null,

  fetchGallery: async () => {
    try {
      set({ loading: true, error: null });
      const { data } = await api.get<GalleryItem[]>("/gallery");
      set({ gallery: data, loading: false });
    } catch (err) {
      console.error("Ошибка при получении галереи", err);
      set({ loading: false, error: "Ошибка загрузки галереи" });
    }
  },

  addGalleryItem: async (newItem) => {
    try {
      set({ loading: true, error: null });
      const { data } = await api.post<GalleryItem>("/gallery", newItem);
      set((state) => ({
        gallery: [...state.gallery, data],
        loading: false,
      }));
    } catch (err) {
      console.error("Ошибка при добавлении в галерею", err);
      set({ loading: false, error: "Ошибка добавления в галерею" });
    }
  },

  updateGalleryItem: async (id, updatedData) => {
    try {
      set({ loading: true, error: null });
      const { data } = await api.patch<GalleryItem>(`/gallery/${id}`, updatedData);
      set((state) => ({
        gallery: state.gallery.map((item) =>
          item.id === id ? data : item
        ),
        loading: false,
      }));
    } catch (err) {
      console.error("Ошибка при обновлении галереи", err);
      set({ loading: false, error: "Ошибка обновления галереи" });
    }
  },

  deleteGalleryItem: async (id) => {
    try {
      set({ loading: true, error: null });
      await api.delete(`/gallery/${id}`);
      set((state) => ({
        gallery: state.gallery.filter((item) => item.id !== id),
        loading: false,
      }));
    } catch (err) {
      console.error("Ошибка при удалении из галереи", err);
      set({ loading: false, error: "Ошибка удаления из галереи" });
    }
  },
}));
