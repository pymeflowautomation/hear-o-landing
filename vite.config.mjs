import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const auditorAnalyze = require('./api/auditor/analyze.js');

export default defineConfig({
  plugins: [react(), {
    name: 'hear-o-local-auditor-api',
    config(_config, { mode }) {
      const localVariables = loadEnv(mode, process.cwd(), '');
      for (const [key, value] of Object.entries(localVariables)) {
        if (!process.env[key]) process.env[key] = value;
      }
    },
    configureServer(server) {
      server.middlewares.use('/api/auditor/analyze', (request, response, next) => {
        if (request.method !== 'POST') return next();
        auditorAnalyze(request, response).catch(next);
      });
    }
  }]
});
