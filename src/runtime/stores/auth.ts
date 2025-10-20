export const useAuthStore = defineStore('nuxt-themes.auth', {
  persist: true,
  state: () => ({
    isAuth: false,
    type: 'Basic',
    token: '',
    user: {}
  }),
  actions: {
    logout () {
      this.isAuth = false;
      this.token = '';
      this.user = {};
      navigateTo('/login');
    }
  }
});

export default useAuthStore;
