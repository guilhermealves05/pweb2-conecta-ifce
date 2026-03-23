import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { LoginSchema, type LoginFormData } from '../schemas/login.schema'
import { setAccessToken } from '../storage/auth.storage'
import { http } from '@/infra/http/http-client'


export function UseFormLogin() {
  const [showPass, setShowPass] = useState<boolean>(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: LoginFormData) => {
  try {
    const responseData = await http.post<{ token: string; user: any }>(
      'auth/login',
      data
    )

    setAccessToken(responseData.token)
    navigate('/feed')
  } catch (error) {
    console.error(error)
    setAuthError(
      error instanceof Error ? error.message : 'Erro desconhecido'
    )
  }
}


  return {
    state: {
      showPass,
      authError,
      setShowPass,
    },
    onSubmit,
    useForm: {
      register,
      handleSubmit,
      isSubmitting,
      isValid,
      errors,
    },
  }
}
