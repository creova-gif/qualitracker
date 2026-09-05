// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

// Workspace-wide flat config, scoped deliberately narrow: only hand-written
// website source, not generated code (lib/api-zod/src/generated, orval
// output), build scripts, or other packages that haven't opted into linting
// yet. Extend the `files` glob below when another package wants this too,
// rather than linting the whole tree by default and fighting generated-file
// noise.
const WEBSITE_SRC = 'artifacts/qualitracker-website/src/**/*.{ts,tsx}';

export default tseslint.config(
  { ignores: ['**/dist/**', '**/node_modules/**', '**/.vite/**', '**/generated/**'] },
  {
    files: [WEBSITE_SRC],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
);
