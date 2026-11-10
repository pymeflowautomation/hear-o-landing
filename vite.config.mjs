import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const auditorAnalyzePath = require.resolve('./api/auditor/analyze.js');
const auditorDirectory = auditorAnalyzePath.slice(0, auditorAnalyzePath.lastIndexOf('analyze.js'));

function loadAuditorAnalyze() {
  for (const modulePath of Object.keys(require.cache)) {
    if (modulePath.startsWith(auditorDirectory)) delete require.cache[modulePath];
  }
  return require(auditorAnalyzePath);
}

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
        loadAuditorAnalyze()(request, response).catch(next);
      });
    }
  }]
});
