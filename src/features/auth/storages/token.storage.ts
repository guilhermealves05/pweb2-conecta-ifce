const KEY_TOKEN = 'access_token'

function setAccessToken(token: string){
  localStorage.setItem(KEY_TOKEN, token)
}

function getAccessToken(): string | null{
  const token = localStorage.getItem(KEY_TOKEN)
  if (!token) return null
  return token
}

function clearAccessToken(){
  localStorage.removeItem(KEY_TOKEN)
}

export {
  setAccessToken,
  getAccessToken,
  clearAccessToken
}

