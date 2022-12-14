import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [eslint(), react()],
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
