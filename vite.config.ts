import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	resolve: {
		alias: [{ find: '~/', replacement: '/' }],
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 8080,
	},
});
