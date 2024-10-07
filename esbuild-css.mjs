import { build } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';
import { sassPlugin } from 'esbuild-sass-plugin';
import copy from 'esbuild-copy-files-plugin';

await build({
    entryPoints: ['./assets/scss/app.scss'],
    bundle: true,
    minify: true,
    outdir: './assets/styles',
    loader: {
        '.eot': 'file',
        '.ttf': 'file',
        '.png': 'file',
        '.webp': 'file',
        '.woff': 'file',
        '.woff2': 'file',
        '.svg': 'file',
    },
    assetNames: '[dir]/[name]',
    plugins: [
        clean({
            patterns: ['./assets/styles/*'],
        }),
        // {
        //     name: 'resolveImages',
        //     setup(bld) {
        //         // Mark all paths starting with "/bundles/admin/images" as external
        //         bld.onResolve(
        //             { filter: /^\.\/images\// },
        //             (args) => ({ path: args.path.replace('./images', '../images'), external: true }),
        //         );
        //     },
        // },
        {
            name: 'resolveFonts',
            setup(bld) {
                // Mark all paths starting with "./fonts" as external and replace it with correct path
                bld.onResolve({ filter: /^\.\/fonts\// }, (args) => ({
                    path: args.path.replace('./fonts', '../fonts'),
                    external: true,
                }));
            },
        },
        copy({
            source: './node_modules/bootstrap-icons/font/fonts',
            target: './assets/fonts',
            copyWithFolder: false,
        }),
        sassPlugin(),
    ],
});
