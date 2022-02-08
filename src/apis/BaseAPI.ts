export const base_url = 'http://localhost:5500/'

//* Base type of all JSON responses
export interface BaseJson_Res {
  success: boolean
}

export async function baseApi<T>(url?: string, init?: RequestInit) {
  return fetch((new URL(url || '', base_url)).href, init)
    .then(res => res.json() as Promise<BaseJson_Res & T>)
}