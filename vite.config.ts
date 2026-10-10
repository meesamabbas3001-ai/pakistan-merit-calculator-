import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import vitePrerender from 'vite-plugin-prerender';
import path from 'path';
import {defineConfig} from 'vite';

const PROD_URL = 'https://pakistan-merit-calculator.vercel.app';

// Every public route, so each page ships as static HTML for Google + AI crawlers.
const PRERENDER_ROUTES = [
  '/',
  '/nust-merit-calculator',
  '/fast-merit-calculator',
  '/comsats-merit-calculator',
  '/uet-lahore-merit-calculator',
  '/air-university-merit-calculator',
  '/uaf-merit-calculator',
  '/punjab-university-merit-calculator',
  '/universities/nust',
  '/universities/fast',
  '/universities/comsats',
  '/universities/uet',
  '/universities/giki',
  '/universities/pieas',
  '/universities/lums',
  '/universities/air',
  '/universities/uaf',
  '/universities/punjab',
  '/universities/iba',
  '/universities/ned',
  '/universities/itu',
  '/universities/ist',
  '/universities/uop',
  '/universities/umt',
  '/universities/ucp',
  '/universities/bahria',
  '/universities/riphah',
  '/universities/bzu',
  '/compare',
  '/matcher',
  '/directory',
  '/faq',
  '/scholarships',
  '/admission-deadlines',
  '/degrees',
  '/changelog',
  '/about',
  '/contact',
  '/verification-policy',
  '/privacy',
  '/terms',
];

const PuppeteerRenderer = (vitePrerender as any).PuppeteerRenderer;

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      vitePrerender({
        // Required - the path to the vite-built app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - routes to render as static HTML.
        routes: PRERENDER_ROUTES,
        // Fixed port so postProcess can rewrite localhost canonicals.
        server: { port: 8001 },
        renderer: new PuppeteerRenderer({
          maxConcurrentRoutes: 4,
          // Wait for React to finish rendering each route (data is local, no async fetch).
          renderAfterTime: 8000,
          headless: true,
          // Required for headless Chrome in sandboxed CI/build environments.
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }),
        postProcess(renderedRoute: any) {
          // Prerendered pages are snapshotted from localhost: fix canonical/OG/JSON-LD URLs.
          renderedRoute.html = renderedRoute.html.split('http://localhost:8001').join(PROD_URL);
          return renderedRoute;
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
