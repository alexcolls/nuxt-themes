/**
 * Type definitions for Nuxt XUI module
 */

export type LightModes = 'light' | 'dark' | 'system';

export interface LangOption {
  value: string;
  label: string;
  icon: string;
}

export interface NuxtXuiUIState {
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

export interface NuxtXuiAuthState {
  isAuth: boolean;
  user: {
    name?: string;
    email?: string;
    [key: string]: any;
  } | null;
  logout: () => void;
}

export interface NuxtXuiAppState {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  selectedItems: any[];
  isProcessing: boolean;
}

export interface NuxtXuiStore {
  ui: NuxtXuiUIState;
  auth: NuxtXuiAuthState;
  app: NuxtXuiAppState;
}
