import * as esbuild from 'esbuild'

// build content script
esbuild.build({
  entryPoints: ["src/scripts/content.ts"],
  bundle: true,
  outfile: "dist/scripts/content.js",
  format: "iife", 
  target: ["es2020"]
});

// build popup
esbuild.build({
  entryPoints: ["src/scripts/popup.ts"],
  bundle: true,
  outfile: "dist/scripts/popup.js",
  format: "iife",
  target: ["es2020"]
});