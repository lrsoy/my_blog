import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ConfigEnv } from 'vite'
import alias from './vites/alias'
import css from './vites/css'
import { parseEnv } from './vites/initEnv'
import setupPlugin from './vites/plugin/index'
import { setupBuild } from './vites/build'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd(); // 获取文件路径，配置文件所在的路径 ‘ .env ’
  const env = parseEnv(loadEnv(mode, root)); // 获取配置项 ‘ .env ’ 文件的内容  

  return {
    plugins: [
      ...setupPlugin(isBuild, env)
    ],
    resolve: {
      alias
    },
    css,
    build: setupBuild(mode)
  }
}