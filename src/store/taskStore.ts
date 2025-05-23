import { create } from 'zustand';
import { Task } from '../types/task';

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  filter: 'ALL' | 'PENDING' | 'DONE';
  setFilter: (f: 'ALL' | 'PENDING' | 'DONE') => void;
  updateTask: (updated: Task) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, status: t.status === 'DONE' ? 'PENDING' : 'DONE' } : t
      ),
    })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
  filter: 'ALL',
  setFilter: (f) => set({ filter: f }),
updateTask: (updated: Task) =>
  set((state) => ({
    tasks: state.tasks.map((t) => (t.id === updated.id ? updated : t)),
  })),
}));
