import { getAccessToken } from "@/features/auth/storages/token.storage";
import { ApiError, type ApiErrorResponse } from "./api-error";

const API_URL = import.meta.env.VITE_API_URL

export const http = {
  get: async <ResponseType>(
    endpoint: string,
    searchParams?: Array<{ key: string; value: string }>,
  ): Promise<ResponseType> => {
   const finalUrl = buildUrl(endpoint, searchParams)
    const response = await fetchWithToken(finalUrl)
    const responseBody = await response.json()
    if (response.ok) {
      return responseBody as ResponseType
    }

    const { error } = responseBody as ApiErrorResponse
    throw new ApiError(
      error.message,
      error.code,
      response.status,
      error.details,
    )
  },

  post: async <ResponseType>(
    endPoint: string,
    body: any,
  ): Promise<ResponseType> => {
    const finalUrl = buildUrl(endPoint)
    const response = await fetchWithToken(finalUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const responseBody = await response.json()

    if (response.ok) {
      return responseBody as ResponseType
    }

    const { error } = responseBody as ApiErrorResponse
    throw new ApiError(
      error.message,
      error.code,
      response.status,
      error.details,
    )
  },
}

function buildUrl(
  endpoint: string,
  searchParams?: Array<{ key: string; value: string }>,
) {
  const finalUrl = new URL(`${API_URL}/${endpoint}`)

  if (searchParams) {
    searchParams.forEach((param) =>
      finalUrl.searchParams.append(param.key, param.value),
    )
  }

  return finalUrl.toString()
}


function fetchWithToken(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const token = getAccessToken()

  if(!token) {
    return fetch(input, init)

  }

  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      'Authorization': `Bearer ${token}`
    }
  })
}
