import type { LangOption } from '../types';

/**
 * Provides available language options for the module
 * Returns an array of supported languages with their icons
 */
export function useNuxtXuiLangs(): LangOption[] {
  return [
    {
      value: 'en',
      label: 'English',
      icon: 'i-circle-flags-us',
    },
    {
      value: 'es',
      label: 'Español',
      icon: 'i-circle-flags-es',
    },
    {
      value: 'fr',
      label: 'Français',
      icon: 'i-circle-flags-fr',
    },
  ];
}
