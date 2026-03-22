import Brand from '@/components/shared/brand'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { registerSchema, type RegisterFormData } from '@/schemas/register.schema'
import { ZodError } from 'zod'
import { useFetcher } from 'react-router'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function RegisterPage() {
  const [showPass, setShowPass] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: RegisterFormData) => {
    console.log('Enviando....', data)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Usuario cadastrado!', data)
    reset()
  }

  return (
    <section className="flex-1 flex items-center justify-center py-20">
      <Card className="max-w-md border-border w-md">
        <CardHeader className="text-center">
          <div className="w-full flex justify-center mb-4">
            <Brand />
          </div>

          <CardTitle className="text-2xl font-bold text-foreground">
            Criar a sua conta
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Preencha os dados para entrar na comunidade
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

            <div className='flex items-center gap-4'>
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName" className="text-foreground">Nome</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  className="h-11 bg-background"
                  {...register('firstName')}
                />
                {errors.firstName &&(
                  <p className="text-xs text-destructive">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="lastName" className="text-foreground"> Sobrenome </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Seu sobrenome"
                  className="h-11 bg-background"
                  {...register('lastName')}
                />
                {errors.lastName &&(
                  <p className="text-xs text-destructive">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-foreground">E-mail Institucional</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.nome@ifce.edu.br"
                className="h-11 bg-background"
                {...register('email')}
              />
              {errors.email &&(
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="role" className="text-foreground">Vinculo</Label>
              <Controller
                name='role'
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value ?? ""}>
                    <SelectTrigger className='bg-background w-full h-11' id="role">
                      <SelectValue placeholder="Selecione seu vínculo com o IFCE" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Estudante</SelectItem>
                      <SelectItem value="professor">Docente</SelectItem>
                      <SelectItem value="technician">Técnico</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.role &&(
                <p className="text-xs text-destructive">
                  {errors.role.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="campus" className="text-foreground">Campus</Label>
              <Controller
                name='campus'
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value ?? ""}>
                    <SelectTrigger className='bg-background w-full h-11' id="campus">
                      <SelectValue placeholder="Selecione seu campus" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taua">Tauá</SelectItem>
                      <SelectItem value="boa_viagem">Boa Viagem</SelectItem>
                      <SelectItem value="fortaleza">Fortaleza</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.campus &&(
                <p className="text-xs text-destructive">
                  {errors.campus.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-foreground">
                Senha
              </Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  required
                  className="h-11 bg-background"
                  {...register('password')}
                />

                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  type="button"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  {showPass ? (
                    <EyeOffIcon className="size-4" />
                  ) : (
                    <EyeIcon className="size-4" />
                  )}
                </button>
              </div>

              {errors.password &&(
                <p className="text-xs text-destructive">
                  {errors.password.message}
                </p>
              )}

              <p className='text-xs text-muted-foreground'>
                Mínimo de 8 caracteres com letras e números
              </p>
            </div>

            <Button type="submit" className="mt-2 h-11">
              Criar Conta
            </Button>
          </form>
        </CardContent>

        <CardFooter className="border-t border-border">
          <p className="text-sm text-muted-foreground text-center w-full">
            Já tem conta?{' '}
            <a href="/login" className="text-primary">Entrar</a>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}

export default RegisterPage
