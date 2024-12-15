import { defineConfig } from 'eslint-define-config';
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser'; // Import directly

export default defineConfig([
  {
    files: ['**/*.ts', '**/*.tsx'], // Apply to TypeScript and TSX files
    languageOptions: {
      parser, // Use the parser directly
      parserOptions: {
        project: './tsconfig.json', // Path to the TSConfig file
        sourceType: 'module', // Use ES module
      },
    },
    plugins: {
      next: eslintPluginNext, // Use the Next.js plugin
      '@typescript-eslint': eslintPluginTypescript, // Use TypeScript plugin
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'warn', // Warn about console statements
    },
  },
]);
