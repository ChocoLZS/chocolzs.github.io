// cp out/zh.html -> out/index.html
import { copyFileSync } from 'fs'

export function makeIndexPage() {
  try {
    copyFileSync('out/zh.html', 'out/index.html')
    copyFileSync('out/zh/sitemap.xml', 'out/sitemap.xml')
    copyFileSync('out/zh/feed.xml', 'out/feed.xml')
    console.log('File copied successfully')
  } catch (err) {
    console.error('Error copying file:', err)
  }
}
