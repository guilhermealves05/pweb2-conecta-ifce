import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { registerSchema, type RegisterFormData } from "../schemas/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { http } from "@/infra/http/http-client"
import { setAccessToken } from "../storage/auth.storage"

export function useFormRegister() {
    const [showPass, setShowPass] = useState<boolean>(false)
  const [campuses, setCampuses] = useState<
    Array<{
      id: string
      name: string
    }>
  >([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchCampuses() {
      try {
        const campuses = await http.get<Array<{id: string; name: string }>>('campuses')
        setCampuses(campuses)
      } catch (error) {
        console.error(error)
      }
      }


    fetchCampuses()
  }, [])

  const {
    register,
    handleSubmit,
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
      const responseData = await http.post<{ token: string, user: any}>('auth/register', payload)
      setAccessToken(responseData.token)
      navigate('/feed')
    } catch (error) {
      console.error(error)
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
