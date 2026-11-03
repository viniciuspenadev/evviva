import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    // Isola o projeto de configurações PostCSS existentes acima desta pasta.
    css: { postcss: { plugins: [] } },
  },
  devToolbar: { enabled: false },
});
