export const setItem = (key: string | undefined, value: object) => {
  if (!key) return
  localStorage.setItem(key, JSON.stringify(value))
  return value
}

export const getItem = (key: string | null | undefined) => {
  if (!key) return null

  try {
    const value = localStorage.getItem(key) || ''
    return JSON.parse(value)
  } catch (e) {
    console.error(e)
    return null
  }
}

export const removeItem = (key: string) => {
  if (!key) return
  localStorage.removeItem(key)
}

export const useLocalStorage = (key: string = '') => {
  const set = (value: object) => setItem(key, value)
  const get = () => getItem(key)
  const remove = () => removeItem(key)

  return { get, set, remove }
}

export default useLocalStorage
