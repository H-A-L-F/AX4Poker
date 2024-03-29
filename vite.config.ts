import path from "path"
import react from "@vitejs/plugin-react"
import { loadEnv, defineConfig } from "vite"

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'process.env.FIREBASE_API_KEY': JSON.stringify(env.FIREBASE_API_KEY),
    'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(env.FIREBASE_AUTH_DOMAIN),
    'process.env.FIREBASE_PROJECT_ID': JSON.stringify(env.FIREBASE_PROJECT_ID),
    'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(env.FIREBASE_STORAGE_BUCKET),
    'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.FIREBASE_MESSAGING_SENDER_ID),
    'process.env.FIREBASE_APP_ID': JSON.stringify(env.FIREBASE_APP_ID)
  }
})
