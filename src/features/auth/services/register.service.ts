import { http } from '@/infra/http/http-client'
import { setAccessToken } from '@/features/auth/storage/auth.storage'
import type { UserRequestDTO, UserResponseDTO } from '../types/dto/auth-dto'


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
