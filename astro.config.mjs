import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'PUBLIC_');
const publicSiteUrl = process.env.PUBLIC_SITE_URL?.trim() || env.PUBLIC_SITE_URL?.trim() || 'https://evviva.bluedigitalhub.com.br';

export default defineConfig({
  site: publicSiteUrl,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    // Isola o projeto de configurações PostCSS existentes acima desta pasta.
    css: { postcss: { plugins: [] } },
  },
  devToolbar: { enabled: false },
});
