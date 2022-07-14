
import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import autoLoad from './autoImport'
export default function setupPlugin(isBuild: boolean, env) {

  const plugin: Plugin[] = [vue()]
  autoLoad(plugin)
  return plugin
}