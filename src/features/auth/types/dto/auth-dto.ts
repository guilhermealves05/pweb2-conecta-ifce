type Role = 'STUDENT' | 'PROFESSOR' | 'TECHNICIAN'

export type UserRequestDTO = {
  firstName: string
  lastName: string
  handle: string
  email: string
  role: Role
  campus: string
  password: string
  course?: string | undefined
}

export type AuthUser = {
  id: string
  firstName: string
  lastName: string
  name: string
  avatarUrl?: string
  handle: string
  email: string
  role: Role
  campus: {
      id: string
      name: string
    }
  course?: string | undefined

}

export type UserResponseDTO = {
  token: string
  user: AuthUser
}
