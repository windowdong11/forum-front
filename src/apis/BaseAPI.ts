import base_url from '../serverUrl.json'

//* Base type of all JSON responses
export interface BaseJson_Res {
  success: boolean
}

export async function baseApi<T>(url?: string, init?: RequestInit) {
  return fetch((new URL(url || '', base_url)).href, init)
    .then(res => {
      if(res.ok)
        return res.json() as Promise<BaseJson_Res & T>
    })
}