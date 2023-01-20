/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('tsup');
const pkg = require('./package.json');

const { BUNDLE } = process.env;

module.exports = defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  clean: true,
  dts: false,
  format: 'cjs',
  minify: true,
  outDir: 'build',
  target: 'es2021',
  bundle: true,
  treeshake: true,
  noExternal: BUNDLE === 'true' && pkg.dependencies? [...Object.keys(pkg.dependencies)] : [],
});
