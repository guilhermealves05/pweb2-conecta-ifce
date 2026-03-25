import { http } from "@/infra/http/http-client";
import { setAccessToken } from "../storage/auth.storage";

type CampusType = {
  id: string
  name: string
}

type UserRequestDTO = {
  firstName: string;
  lastName: string;
  handle: string;
  email: string;
  role: "student" | "professor" | "technician";
  password: string;
  course?: string | undefined;

}

type UserResponseDTO = {
  token: string
  user: UserRequestDTO | {
    id: string
    name: string
    avatarUrl?: string
    campus: {
      id: string
      name: string
    }
  }
}

export async function getCampuses(): Promise<Array<CampusType>> {
  const campuses = await http.get<Array<CampusType>>('campuses')
  return campuses
}

export async function registerUser(
  user: UserRequestDTO,
): Promise<UserResponseDTO> {
  const responseData = await http.post<UserResponseDTO>(
          'auth/register',
          user,
        )
        setAccessToken(responseData.token)
        return responseData
}
