import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Kept separate from vite.config.ts on purpose: that file's plugin list
// includes Replit-only plugins gated on REPL_ID and a hardcoded dev PORT,
// neither of which belong in a test run. Same `@` alias, so imports resolve
// identically to the real app.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
});
