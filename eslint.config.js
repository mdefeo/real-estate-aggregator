import { defineConfig } from 'eslint-define-config';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginNext from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';

export default defineConfig([
  {
    // Frontend (Next.js + React) configuration
    files: ['frontend/**/*.ts', 'frontend/**/*.tsx'],  // Apply to frontend files
    languageOptions: {
      parser: parser,  // Use the TypeScript parser
      parserOptions: {
        project: './tsconfig.json',  // Path to tsconfig
        sourceType: 'module',        // ES module
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      react: eslintPluginReact,     // React plugin
      next: eslintPluginNext,       // Next.js plugin
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',  // Disable JSX usage warning in React
      'react/react-in-jsx-scope': 'off',  // React 17+ no longer requires React in scope
    },
    ignores: ['.next/**/*'], // Ignore Next.js build files
  },
  {
    // Backend (NestJS) configuration
    files: ['backend/**/*.ts'],  // Apply to backend files
    languageOptions: {
      parser: parser,  // Use the TypeScript parser
      parserOptions: {
        project: './tsconfig.json',  // Path to tsconfig
        sourceType: 'module',        // ES module
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript, // Use the TypeScript plugin
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'warn',  // Warn about console statements in backend
    },
    ignores: ['dist/**/*'],  // Ignore compiled files in the backend
  },
]);
