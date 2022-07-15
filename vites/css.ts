// 单独抽离css配置
/**
 * 注意，在引入scss文件的时候是 @import 而不是自己定义的变量名
 */
import { CSSOptions } from 'vite'
const css = {
  preprocessorOptions: {
    scss: {
      charset: false,
      additionalData: `@import "~/styles/index.scss";`
    },
    sass: {
      charset: false,
    }
  }
} as CSSOptions

export default css