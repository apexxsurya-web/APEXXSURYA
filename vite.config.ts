import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Support GitHub Actions, GitHub Pages repo subdirectories, custom domains, and relative paths
  let base = './';
  if (process.env.BASE_PATH) {
    base = process.env.BASE_PATH.endsWith('/') ? process.env.BASE_PATH : `${process.env.BASE_PATH}/`;
  } else if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repo && !repo.endsWith('.github.io')) {
      base = `/${repo}/`;
    } else {
      base = '/';
    }
  } else if (process.env.npm_package_homepage) {
    try {
      const pathname = new URL(process.env.npm_package_homepage).pathname;
      base = pathname.endsWith('/') ? pathname : `${pathname}/`;
    } catch {
      // fallback to relative
    }
  }

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'remove-dev-redirect',
        enforce: 'post' as const,
        transformIndexHtml(html: string) {
          return html.replace(/<!-- GITHUB_DEV_ONLY_START -->[\s\S]*?<!-- GITHUB_DEV_ONLY_END -->/g, '');
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
