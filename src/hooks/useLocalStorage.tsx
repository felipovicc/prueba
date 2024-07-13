import { useState } from 'react'

export const useLocalStorage = (key: string = '') => {
  const [value, setvalue] = useState<object | string | null>()

  const set = (value: object) => {
    localStorage.setItem(key, JSON.stringify(value))
    setvalue(value)
    return value
  }

  const get = () => {
    try {
      let value = localStorage.getItem(key) || ''
      value = JSON.parse(value)
      setvalue(value)
      return value
    } catch (e) {
      console.error(e)
      return null
    }
  }

  const remove = () => {
    localStorage.removeItem(key)
    setvalue(null)

    return null
  }

  return { value, set, get, remove }
}
