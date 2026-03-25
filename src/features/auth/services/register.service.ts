import { http } from '@/infra/http/http-client'
import type { UserRequestDTO, UserResponseDTO } from '../types/dto/auth-dto.ts'
import { setAccessToken } from '../storages/token.storage'


type CampusType = {
  id: string
  name: string
}

export async function getCampuses(): Promise<Array<CampusType>> {
  const campuses = await http.get<Array<CampusType>>('campuses')
  return campuses
}

export async function registerUser(
  user: UserRequestDTO,
): Promise<UserResponseDTO> {
  const responseData = await http.post<UserResponseDTO>('auth/register', user)
  setAccessToken(responseData.token)

  return responseData
}
