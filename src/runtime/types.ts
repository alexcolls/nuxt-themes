/**
 * Type definitions for Nuxt UX module
 */

export type LightModes = 'light' | 'dark' | 'system';

export interface LangOption {
  value: string;
  label: string;
  icon: string;
}

export interface NuxtUxUIState {
  isDark: boolean;
  locale: string;
  iLocale: number;
  primary: string;
  flashlight: boolean;
  showVideo: boolean;
  videoURL: string;
  videoOpacity: number;
  volumeVideo: number;
  volumeAudio: number;
  videoPlaylist: string[];
}

export interface NuxtUxAuthState {
  isAuth: boolean;
  user: {
    name?: string;
    email?: string;
    [key: string]: any;
  } | null;
  logout: () => void;
}

export interface NuxtUxAppState {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  selectedItems: any[];
  isProcessing: boolean;
}

export interface NuxtUxStore {
  ui: NuxtUxUIState;
  auth: NuxtUxAuthState;
  app: NuxtUxAppState;
}
