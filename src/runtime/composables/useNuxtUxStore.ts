import type { NuxtUxStore, NuxtUxUIState, NuxtUxAuthState, NuxtUxAppState } from '../types';

/**
 * Nuxt UX Store using built-in useState() composable
 * Provides SSR-safe state management without Pinia dependency
 * 
 * @returns Object containing ui, auth, and app state objects
 */
export function useNuxtUxStore(): NuxtUxStore {
  // UI State - Theme, language, colors, media settings
  const ui = useState<NuxtUxUIState>('nuxt-ux-ui', () => ({
    isDark: false,
    locale: 'en',
    iLocale: 0,
    primary: 'blue',
    flashlight: false,
    showVideo: false,
    videoURL: '',
    videoOpacity: 0.3,
    volumeVideo: 0.5,
    volumeAudio: 0.8,
    videoPlaylist: [],
  }));

  // Auth State - Authentication and user management
  const auth = useState<Omit<NuxtUxAuthState, 'logout'>>('nuxt-ux-auth', () => ({
    isAuth: false,
    user: null,
  }));

  // Logout function (not serialized in state)
  const logout = () => {
    auth.value.isAuth = false;
    auth.value.user = null;
  };

  // App State - Application-level state (menus, modals, etc.)
  const app = useState<NuxtUxAppState>('nuxt-ux-app', () => ({
    isMenuOpen: false,
    isModalOpen: false,
    selectedItems: [],
    isProcessing: false,
  }));

  // Helper methods for UI state
  const addVideo = (url: string) => {
    if (!ui.value.videoPlaylist.includes(url)) {
      ui.value.videoPlaylist.push(url);
    }
  };

  const removeVideo = (url: string) => {
    const index = ui.value.videoPlaylist.indexOf(url);
    if (index > -1) {
      ui.value.videoPlaylist.splice(index, 1);
    }
  };

  // Extend ui state with helper methods
  const uiWithHelpers = {
    ...ui.value,
    addVideo,
    removeVideo,
  };

  return {
    ui: uiWithHelpers as NuxtUxUIState,
    auth: { ...auth.value, logout },
    app: app.value,
  };
}
