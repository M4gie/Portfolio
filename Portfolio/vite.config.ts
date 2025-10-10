import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  alias: {
    '@Src': resolve(__dirname, 'src'),
    '@Public': resolve(__dirname, 'public'),
  },
});
