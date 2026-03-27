import type { AuthUser } from "../types/dto/AuthDTO.ts"

const KEY_AUTH_USER = 'auth_user'

function setStoredUser(user: AuthUser){
  localStorage.setItem(KEY_AUTH_USER, JSON.stringify(user))
}

function getStoredUser(): AuthUser | null{
  const raw = localStorage.getItem(KEY_AUTH_USER)
  if(!raw) return null
  return JSON.parse(raw) as AuthUser
}

function clearStoredUser(){
  localStorage.removeItem(KEY_AUTH_USER)
}

export {
  setStoredUser,
  getStoredUser,
  clearStoredUser
}

