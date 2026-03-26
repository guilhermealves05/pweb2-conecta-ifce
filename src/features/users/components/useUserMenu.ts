import { useAuth } from "@/features/auth/contexts/AuthContext";
import { logout } from "@/features/auth/services/login.service";
import { useNavigate } from "react-router";

export function useUserMenu() {
const { authUser, clearAuthUser } = useAuth()
const navigate = useNavigate()



  const triggerLogout = () => {
    clearAuthUser()
    logout()
    navigate('/login')
  }

  return{
    authUser,
    triggerLogout
  }
}

