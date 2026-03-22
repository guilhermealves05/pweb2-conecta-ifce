import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { registerSchema, type RegisterFormData } from "../schemas/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export function useFormRegister() {
    const [showPass, setShowPass] = useState<boolean>(false)
  const [campuses, setCampuses] = useState<
    Array<{
      id: string
      name: string
    }>
  >([])

  const navigate = useNavigate() // ✅ corrigido

  useEffect(() => {
    async function fetchCampuses() {
      const response = await fetch(
        'https://conectaifce-api.proflucasmendes.com.br/campuses',
      )

      if (response.ok) {
        const data = await response.json()
        setCampuses(data)
      }
    }

    fetchCampuses()
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: RegisterFormData) => {
    console.log('Enviando....', data)

    const { course, ...rest } = data
    const payload = data.role === 'student' ? data : rest

    try {
      const response = await fetch(
        'https://conectaifce-api.proflucasmendes.com.br/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      )

      const responseData = await response.json()

      if (!response.ok) {
        console.error('ERRO DA API:', responseData)
        return
      }

      // ✅ SUCESSO (corrigido)
      localStorage.setItem('access_token', responseData.token)
      navigate('/feed')

      console.log('SUCESSO:', responseData)
      reset()
    } catch (error) {
      console.error('ERRO GERAL:', error)
    }
  }

  return {
    state: {
      showPass,
      setShowPass,
      campuses
    },
    onSubmit,
    useForm: {
      register,
      handleSubmit,
      control,
      isSubmitting,
      isValid,
      errors,
      watch
    }
  }
}
