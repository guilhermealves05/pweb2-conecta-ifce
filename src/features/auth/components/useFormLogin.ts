import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { LoginSchema, type LoginFormData } from '../schemas/login.schema'
import { ApiError } from '@/infra/http/api-error'
import { login } from '../services/login.service'


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
    login(data.email, data.password)
    navigate('/feed')
  } catch (error) {
    if(error instanceof ApiError) {
      setAuthError(error.message)
    }
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
