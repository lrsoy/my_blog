// 单独抽离打包配置
import { BuildOptions } from 'vite'
import path from 'path'
export function setupBuild(mode: string) {
  const fileSuffix: RegExp = /\jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp|jpeg$/
  const build = {
    outDir: `./${mode === 'test' ? 'testDist' : 'dist'}`, // 打包文件路径
    chunkSizeWarningLimit: 1600, // 块大小警告，限制大小
    cssCodeSplit: true, // 启用css代码拆分
    emptyOutDir: true, // 打包文件如果在根目录下 （outDir在root）先被清空
    minify: "terser",
    terserOptions: {
      compress: {
        // 生产环境去除打包以及debugger
        drop_debugger: true,
        drop_console: true
      }
    },
    rollupOptions: {
      emptyOutDir: true,
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
        entryFileNames: `assets/js/[name].js`, // 入口文件
        chunkFileNames: `assets/js/[name]-[hash].js`, // 块文件
        assetFileNames(chunkInfo) {
          if (chunkInfo.name) {
            const [name, ext] = path.basename(chunkInfo.name).split('.')
            return `assets/${fileSuffix.test(ext.toLowerCase()) ? 'images' : ext}/${name.toLowerCase()}-[hash].${ext}`
          }
          return ''
        },
      }
    }

  } as BuildOptions
  return build
}
