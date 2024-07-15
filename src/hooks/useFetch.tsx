import { useCallback, useEffect, useState } from 'react'

export enum STATUS {
  SUCCESS = 'success',
  FETCHING = 'fetching',
  ERROR = 'error',
  IDLE = 'idle',
}

export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

// type DataType = {
//   data?: Array<object>
//   page?: number
//   per_page?: number
//   total?: number
//   total_pages?: number
//   support?: object
// }

type ResponseType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  status?: string
  message?: string
  error?: string
  loading?: boolean
}

export interface FetchParameters {
  body?: object | null
  code?: number
  search?: object
  headers?: object
  method?: METHOD
}

const INITIAL_RESPONSE: ResponseType = {
  status: STATUS.IDLE,
  data: undefined,
  message: undefined,
  error: undefined,
  loading: false,
}

export const addParamsToUrl = (url: string, params: object | undefined): string => {
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

  const fetch = useCallback((url: string, params: FetchParameters): Promise<ResponseType> => {
    const { method, body, search } = params

    setResponse({ ...response, status: STATUS.FETCHING, loading: true })

    const options: RequestInit = {
      method: method || (body ? METHOD.POST : METHOD.GET),
      headers: { 'Content-Type': 'application/json', ...(params.headers || {}) },
      body: body ? JSON.stringify(body) : null,
    }

    return window
      .fetch(addParamsToUrl(url, search), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error)

        const result = {
          ...response,
          status: STATUS.SUCCESS,
          error: undefined,
          loading: false,
          data,
        } satisfies ResponseType

        setResponse(result)
        return result
      })
      .catch((e) => {
        console.error(e)

        const result = {
          ...response,
          status: STATUS.ERROR,
          error: e.message,
          loading: false,
        } satisfies ResponseType

        setResponse(result)
        return result
      })
  }, [])

  useEffect(() => {
    if (url && response.status === STATUS.IDLE) fetch(url, params)
  }, [url, params])

  return { fetch, ...response }
}

export default useFetch
