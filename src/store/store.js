
import { create } from "zustand";

const useSharedPropsStore = create((set) => ({
  projectName: "Sandwiches",
  // userId: 1,
  updateProjectName: (newProjectName) => set({ projectName: newProjectName }),
  // updateUserId: (id) => set({ userId: id }),
}));

export default useSharedPropsStore;