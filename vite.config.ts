import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Fitness App',
          short_name: 'Fitness App',
          description: 'Personalised Body Transformation Plan for Aman Gupta',
          theme_color: '#0c0c0c',
          background_color: '#0c0c0c',
          display: 'standalone',
          icons: [
            {
              src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzBjMGMwYyIvPjxyZWN0IHg9IjYwIiB5PSIxOTYiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxMjAiIHJ4PSIxMiIgZmlsbD0iI2U4YzU0NyIvPjxyZWN0IHg9IjQwIiB5PSIyMTYiIHdpZHRoPSIzMCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNlOGM1NDciLz48cmVjdCB4PSIxMTAiIHk9IjIzOCIgd2lkdGg9IjI5MiIgaGVpZ2h0PSIzNiIgcng9IjYiIGZpbGw9IiNlOGM1NDciLz48cmVjdCB4PSI0MDIiIHk9IjE5NiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEyMCIgcng9IjEyIiBmaWxsPSIjZThjNTQ3Ii8+PHJlY3QgeD0iNDQyIiB5PSIyMTYiIHdpZHRoPSIzMCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNlOGM1NDciLz48L3N2Zz4=',
              sizes: '192x192',
              type: 'image/svg+xml',
            },
            {
              src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzBjMGMwYyIvPjxyZWN0IHg9IjYwIiB5PSIxOTYiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxMjAiIHJ4PSIxMiIgZmlsbD0iI2U4YzU0NyIvPjxyZWN0IHg9IjQwIiB5PSIyMTYiIHdpZHRoPSIzMCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNlOGM1NDciLz48cmVjdCB4PSIxMTAiIHk9IjIzOCIgd2lkdGg9IjI5MiIgaGVpZ2h0PSIzNiIgcng9IjYiIGZpbGw9IiNlOGM1NDciLz48cmVjdCB4PSI0MDIiIHk9IjE5NiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEyMCIgcng9IjEyIiBmaWxsPSIjZThjNTQ3Ii8+PHJlY3QgeD0iNDQyIiB5PSIyMTYiIHdpZHRoPSIzMCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNlOGM1NDciLz48L3N2Zz4=',
              sizes: '512x512',
              type: 'image/svg+xml',
              purpose: 'any maskable'
            }
          ]
        },
        devOptions: {
          enabled: true,
          type: 'module',
        }
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
