import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [{ id: 1, todo: "Movie" }],
  setTodos: (movies) => set({ movies }),
}));