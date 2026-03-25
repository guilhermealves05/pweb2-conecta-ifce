import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { registerSchema, type RegisterFormData } from "../schemas/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ApiError } from "@/infra/http/api-error"
import { getCampuses, registerUser } from "../services/register.service"

export function useFormRegister() {
    const [showPass, setShowPass] = useState<boolean>(false)
    const [registerError, setRegisterError] = useState<string | null>(null)
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
        const campuses = await getCampuses()
        setCampuses(campuses)
      } catch (error) {
        if (error instanceof ApiError) {
          setRegisterError(error.message)
        }
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
      registerUser(payload)
      navigate('/feed')
    } catch (error) {
      if(error instanceof ApiError) {
            setRegisterError(error.message)
          }
    }
  }

  return {
    state: {
      showPass,
      setShowPass,
      registerError,
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
