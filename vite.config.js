import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'

// Function to copy directory recursively
function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true })
  const entries = readdirSync(src)

  for (const entry of entries) {
    const srcPath = resolve(src, entry)
    const destPath = resolve(dest, entry)

    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

// Plugin to copy library folder
function copyLibraryPlugin() {
  return {
    name: 'copy-library',
    closeBundle() {
      console.log('📦 Copying library folder...')
      copyDir(
        resolve(__dirname, 'src/library'),
        resolve(__dirname, 'library')
      )
      console.log('✅ Library folder copied!')
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwind(),
    copyLibraryPlugin(),
  ],
})