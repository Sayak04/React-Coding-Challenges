import { create } from "zustand";

interface InputState {
  title: string;
  setTitle: (title: string) => void;
}

const useStore = create<InputState>((set) => ({
  title: "",
  setTitle: (title) =>
    set((state) => ({
      ...state,
      title,
    })),
}));

export default useStore;