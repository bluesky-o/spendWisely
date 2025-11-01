import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist', 'build']),
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        plugins: {
            react,
            import: importPlugin,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'import/no-unresolved': 'off',
            indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1 }],
            'no-shadow': ['error', { allow: ['err', 'callback'] }],
            'no-param-reassign': ['error', { props: false }],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 1 }],
            'no-else-return': 'error',

            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'max-len': 'off',
            'linebreak-style': 0,
        },
    },
])
