import { defineConfig } from 'eslint-define-config';
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default defineConfig([
  {
    files: ['**/*.ts', '**/*.tsx'],  // Target TypeScript and TSX files
    languageOptions: {
      parser: parser,  // Use the imported parser directly here
      parserOptions: {
        project: './tsconfig.json',  // Path to tsconfig
        sourceType: 'module',  // Use ES module syntax
      },
    },
    plugins: {
      next: eslintPluginNext,  // Next.js ESLint plugin
      '@typescript-eslint': eslintPluginTypescript,  // TypeScript plugin
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'warn',
    },
  },
]);
