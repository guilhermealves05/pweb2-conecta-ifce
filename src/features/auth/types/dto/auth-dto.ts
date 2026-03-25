export type UserRequestDTO = {
  firstName: string
  lastName: string
  handle: string
  email: string
  role: 'student' | 'professor' | 'technician'
  campus: string
  password: string
  course?: string | undefined
}



export type UserResponseDTO = {
  token: string
  user: UserRequestDTO & {
    id: string
    name: string
    avatarUrl?: string
    campus: {
      id: string
      name: string
    }
  }
}
