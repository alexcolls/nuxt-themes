import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/module'],
  externals: ['@nuxt/schema', '@nuxt/kit', 'nuxt'],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
