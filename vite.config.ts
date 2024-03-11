import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { loadEnv } from 'vite';

// https://vitejs.dev/config/

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), nodePolyfills()],
  define: {
    global: 'globalThis',

    'process.env': Object.entries(process.env).reduce(
      (acc, [key, value]) => ({
        ...acc,
        ...((key.startsWith('VITE') || ['NODE_ENV'].includes(key)) && {
          [key]: value,
        }),
      }),
      {}
    ),
  },
});
