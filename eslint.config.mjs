import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    },
    {
        ignores: [
            'vendor/**/*.{js,ts,mjs,cjs,jsx,tsx}',
            'assets/vendor/**/*.js',
            'assets/controllers/**/*.js',
            'assets/dist/**/*.js',
        ],
    },
    {
        settings: {
            react: {
                version: '18',
            },
        },
    },
    {
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': ['off'],
        },
    },
];
