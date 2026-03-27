import { getProfile } from "@/features/users/services/user.service"
import type { UserProfileDTO } from "@/features/users/types/dto/UserProfileDTO"
import { useEffect, useState } from "react"

export function useProfile() {
  const [userData, setUserData] = useState<UserProfileDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {

    const fetchProfile = async () => {
    setIsLoading(true)

    const responseData = await getProfile()
    setUserData(responseData)

    setIsLoading(false)
  }
  fetchProfile()
  }, [])
  return{
    userData,
    isLoading
  }
}
