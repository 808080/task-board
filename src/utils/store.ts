import { writable } from 'svelte/store';
import type { Column, TStore } from './types';

export const STORAGE_NAME = 'store';

const createStore = () => {

  const localStore: TStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

  const { subscribe, set, update } = writable<TStore>(localStore || {
    tasks: [],
    columns: [],
    idCounterTask: 1,
    idCounterColumn: 0
  });

  const methods = {
    addTask: (text: string, columnId: number) => update((state: TStore) => ({
      ...state,
      tasks: [...state.tasks, { id: state.idCounterTask, text, columnId }],
      idCounterTask: state.idCounterTask + 1
    })),
    addColumn: (title: string, image: string) => update((state: TStore) => ({
      ...state,
      columns: [...state.columns, { id: state.idCounterColumn, title, image }],
      idCounterColumn: state.idCounterColumn + 1
    })),
    updateColumn: (column: Column) => update((state: TStore) => {
      const columnIndex = state.columns.findIndex((c) => c.id === column.id);
      state.columns[columnIndex] = column;
      return state;
    }),
    removeColumn: (id: number) => update((state: TStore) => ({
      ...state,
      columns: state.columns.filter((c) => c.id !== id)
    })),
    setStorage: (store: TStore) => localStorage.setItem(STORAGE_NAME, JSON.stringify(store))
  };

  return {
    subscribe,
    set,
    update,
    ...methods
  };
}

const Store = createStore();

export default Store;