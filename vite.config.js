import { defineConfig } from 'vite';
import { ripple } from '@ripple-ts/vite-plugin';
import { resolve } from 'node:path';

export default defineConfig({
	base: '/shiba-incremental/',
	publicDir: resolve(__dirname, 'src/assets'),
	plugins: [ripple()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
