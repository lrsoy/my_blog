import { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default function autoLoad(plugins: Plugin[]) {
  plugins.push(
    AutoImport({
      imports: ['vue', 'vue-router'],
      //为true时在项目根目录自动创建
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components'],
      directoryAsNamespace: true,
      dts: 'types/components.d.ts',
    })
  )
}