const API_URL = import.meta.env.VITE_API_URL

export const http = {
  get: async <ResponseType>(
    endpoint: string,
    searchParams?: Array<{ key: string; value: string }>,
  ): Promise<ResponseType> => {
    const finalUrl = buildUrl(endpoint, searchParams)
    const response = await fetch(finalUrl)
    const responseBody = await response.json()
    if (response.ok) {
      return responseBody as ResponseType
    }

    throw new Error('Erro ao buscar dados.')
  },

  post: async <ResponseType>(
    endPoint: string,
    body: any,
  ): Promise<ResponseType> => {
    const finalUrl = buildUrl(endPoint)
    const response = await fetch(finalUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (response.ok)  {
      return (await response.json()) as ResponseType
    }

    throw new Error('Erro ao enviar dados.')

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
