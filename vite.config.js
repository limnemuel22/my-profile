import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.VITE_SITE_URL =
    env.VITE_SITE_URL || process.env.VITE_SITE_URL || 'https://my-profile.vercel.app'

  return {
    plugins: [react(), tailwindcss()],
  }
})
