// Set VITE_API_BASE_URL to switch services from local mocks to FastAPI.
export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? ''
export const USE_MOCK = !API_BASE_URL
export const delay = (ms = 400) => new Promise<void>((r) => setTimeout(r, ms))

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, init)
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`)
  return res.json() as Promise<T>
}
