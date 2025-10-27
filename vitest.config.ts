import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/runtime/**/*.{ts,vue}'],
      exclude: [
        'src/runtime/types.ts',
        'src/runtime/locales/**',
        '**/*.test.ts',
        '**/*.spec.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
