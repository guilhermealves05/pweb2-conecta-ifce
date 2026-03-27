import type { UserDomain } from "./UserDomain";

export type UserProfileDTO = Omit<UserDomain, 'isFollowing'>
