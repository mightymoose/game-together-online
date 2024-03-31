import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: 'happy-dom',
    exclude: ['tests', 'node_modules'],
    coverage: {
      all: true,
      include: ['src'],
      exclude: ['src/**/*.page.*'],
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    }
  }
})
