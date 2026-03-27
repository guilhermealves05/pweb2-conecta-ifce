import { createContext, useContext, useState, type ReactNode } from "react"
import type { AuthUser } from "../types/dto/AuthDTO.ts"
import { clearStoredUser, getStoredUser, setStoredUser } from "../storages/authUser.storage"

type AuthContextType = {
  isAthenticated: boolean
  authUser: AuthUser | null
  setAuthUser: (user: AuthUser) => void
  clearAuthUser: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)


export function AuthProvider({ children }: {children: ReactNode}) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(() => getStoredUser())

  function setUser(user: AuthUser) {
    setStoredUser(user)
    setAuthUser(user)
  }

  function clearUser() {
    clearStoredUser()
    setAuthUser(null)
  }

  return (
    <AuthContext
      value={{
        isAthenticated: authUser !== null,
        authUser,
        setAuthUser: setUser,
        clearAuthUser: clearUser,
      }}
    >
      {children}
    </AuthContext>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if(!context){
    throw Error('O contexto de autenticação não pode ser acessado fora do AuthProvider')
  }
  return context
}
