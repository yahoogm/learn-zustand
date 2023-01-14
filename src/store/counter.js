import create from 'zustand';

const store = (set) => {
  return {
    counter: 0,
    increase: () => set((state) => ({ counter: state.counter + 1 })),
    decrease: () => set((state) => ({ counter: state.counter - 1 })),
  };
};

const useStore = create(store);

export default useStore;
