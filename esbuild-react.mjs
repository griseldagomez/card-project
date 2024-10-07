import { build } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';

await build({
    entryPoints: ['./assets/react/index.tsx'],
    bundle: true,
    format: 'esm',
    minify: true,
    outdir: './assets/dist',
    loader: {
        '.eot': 'file',
        '.ttf': 'file',
        '.png': 'file',
        '.webp': 'file',
        '.woff': 'file',
        '.woff2': 'file',
        '.svg': 'file',
    },
    jsx: 'automatic',
    jsxImportSource: 'react',
    assetNames: '[dir]/[name]',
    plugins: [
        clean({
            patterns: ['./assets/dist/*'],
        }),
    ],
});
