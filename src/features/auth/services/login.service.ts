import { http } from "@/infra/http/http-client"
import type { UserResponseDTO } from "../types/dto/AuthDTO.ts"
import { clearAccessToken, setAccessToken } from "../storages/token.storage"


export async function login(email: string, password: string): Promise<UserResponseDTO> {
  const responseData = await http.post<UserResponseDTO>('auth/login', {
    email,
    password,
  })

  setAccessToken(responseData.token)
  return responseData
}

export function logout(): void {
  clearAccessToken()
}
