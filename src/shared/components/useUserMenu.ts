import { useAuth } from "@/features/auth/contexts/AuthContext";
import { logout } from "@/features/auth/services/login.service";
import { useNavigate } from "react-router";

export function useUserMenu() {
const { authUser, clearAuthUser } = useAuth()
const navigate = useNavigate()

const getInitials = (): string  =>  {
  const firstName = authUser?.firstName
  const lastName = authUser?.lastName

  if (firstName && lastName) {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase()
  }

  if (firstName) {
    return firstName[0].toUpperCase()
  }

    return '?'

}

  const triggerLogout = () => {
    clearAuthUser()
    logout()
    navigate('/login')
  }

  return{
    authUser,
    getInitials,
    triggerLogout
  }
}

