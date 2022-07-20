/** 处理本地存储 
 *  localStorage
 *  sessionStorage
*/
interface data {
  data: any,
  expire?: number
}

export const handleCache = {
  set(key: string, data: any, expire?: number): void {
    const cache: data = { data }
    if (expire) {
      cache.expire = new Date().getTime() + data.expire * 1000
    }
    window.localStorage.setItem(key, JSON.stringify(cache))
  },
  get(key: string, defaultValue: any = null): any {
    const cacheStore = window.localStorage.getItem(key)
    if (cacheStore) {
      const cache = JSON.parse(cacheStore)
      const expire = cache?.expire
      if (expire && expire < new Date().getTime()) {
        window.localStorage.removeItem(key)
        return defaultValue
      }
      return cache.data
    }
    return defaultValue
  },
  remove(key: string) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  }
}

export const handleCookies = {
  set() {

  },
  get() {

  },
  remove() {

  }
}