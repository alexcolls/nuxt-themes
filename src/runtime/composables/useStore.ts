export const useStore = () => {
  return {
    ui: useUIStore(),
    auth: useAuthStore(),
    data: useDataStore(),
    app: useAppStore()
  };
};
