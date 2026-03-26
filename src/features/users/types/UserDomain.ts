export type Role = 'STUDENT' | 'PROFESSOR' | 'TECHNICIAN'


export type UserDomain = {
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
  stats: {
    followersCount: number
    followingCount: number

    postsCount: number
  }

  isFollowing: boolean
}
