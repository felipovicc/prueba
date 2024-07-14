import { useEffect, useState } from 'react'

enum STATUS {
  SUCCESS = 'success',
  FETCHING = 'fetching',
  ERROR = 'error',
  IDLE = 'idle',
}

enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type ResponseType = {
  status?: STATUS
  message?: null | string
  data?: null | object
  loading?: boolean
}

type Record = undefined | object | string | number | boolean

type FetchParameters = {
  body?: object | string
  code?: number
  search?: Record
  headers?: Record
  method?: METHOD
}

const INITIAL_RESPONSE: ResponseType = {
  status: STATUS.IDLE,
  data: null,
  message: null,
  loading: false,
}

export const addParamsToUrl = (url: string, params: Record): string => {
  const urlObj = new URL(`${process.env.REACT_APP_API_URL}/${url}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      urlObj.searchParams.append(key, value.toString())
    })
  }

  return urlObj.toString()
}

const useFetch = (url?: string, params: FetchParameters = {}) => {
  const [response, setResponse] = useState<ResponseType>(INITIAL_RESPONSE)

  const fetch = (url: string, { method = METHOD.GET, body, search }: FetchParameters = {}): Promise<ResponseType> => {
    setResponse({ ...response, status: STATUS.FETCHING, loading: true })

    const options = {
      method,
      body: body ? JSON.stringify(body) : null,
    }

    return window
      .fetch(addParamsToUrl(url, search), options)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error(`Error ${res.status}: ${res.statusText}`)
      })
      .then((data) => {
        const result = {
          ...response,
          status: STATUS.SUCCESS,
          loadaing: false,
          data,
        }
        setResponse(result)
        return result
      })
      .catch((e) => {
        console.error(e)
        const result = {
          ...response,
          status: STATUS.ERROR,
          message: e.message,
          loadaing: false,
        }
        setResponse(result)
        return result
      })
  }

  useEffect(() => {
    if (url && response.status === STATUS.IDLE) fetch(url, params)
    return () => {
      setResponse(INITIAL_RESPONSE)
    }
  }, [url])

  return { fetch, response }
}

export default useFetch
