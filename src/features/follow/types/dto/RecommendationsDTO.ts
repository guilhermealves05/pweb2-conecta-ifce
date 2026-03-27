export type RecommendationsDTO = {
  items: Array<{
    id: string
    firstName: string
    lastName: string
    name: string
    handle: string
    avatarUrl: string
    campus: {
      id: string
      name: string
    }
    course?: string
    reason: "mutual_friends" | "same_campus" | "discover"

  }>
}
