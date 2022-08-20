require('esbuild').buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node16'],
  outdir: 'dist',
  sourcemap: true,
  format: 'cjs',
  minify: true,
  treeShaking: true,
});
