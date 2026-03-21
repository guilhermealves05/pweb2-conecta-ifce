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
import { EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function RegisterPage() {
  const [showPass, setShowPass] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // Aqui estamos criando um estado para controlar se a aplicação está em processo de login (isLoading)
  // Quando o usuário clica no botão de login, definimos isLoading como true, indicando que a aplicação está processando a solicitação de login
  // Durante esse tempo, o botão de login é desabilitado para evitar múltiplos cliques e, em vez do texto "Entrar", exibimos um ícone de carregamento (Loader2Icon) junto com o texto "Entrando..."
  // Assim que a resposta da API é recebida e o processo de login é concluído (seja com sucesso ou com erro), definimos isLoading como false, permitindo que o usuário interaja novamente com o botão de login
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Aqui estamos criando um estado para armazenar mensagens de erro
  // Observe ao longo do código que, quando ocorre um erro, atualizamos esse estado com a mensagem de erro recebida da API
  // E, na interface do usuário, verificamos se há uma mensagem de erro e a exibimos para o usuário, proporcionando feedback sobre o que deu errado
  // Além disso, definimos um timeout para limpar a mensagem de erro após 3 segundos, garantindo que a interface fique limpa novamente
  // Também atualizamos o estilo dos rótulos (labels) para que, quando houver um erro, eles fiquem com a cor de texto de erro (text-destructive), destacando visualmente o problema para o usuário
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()

    setIsLoading(true)

    const response = await fetch(
      'https://conectaifce-api.proflucasmendes.com.br/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    )

    const data = await response.json()
    console.log(data)

    if (response.status === 200) {
      localStorage.setItem('token_access', data.token)
      setEmail('')
      setPassword('')
      setError(null)
      // Redirecionar para a página inicial da área logada
      // window.location.href = '/feed'
    }

    if (data.error) {
      setError(data.error.message)
      setTimeout(() => setError(null), 3000)
    }

    setIsLoading(false)
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>


            <div className='flex items-center gap-4'>
              <div className="flex flex-col gap-2">
              <Label htmlFor="nome" className="text-foreground">Nome</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome completo"
                required
                className="h-11 bg-background"
              />
            </div>

                  <div className="flex flex-col gap-2">
              <Label htmlFor="sobrenome" className="text-foreground"> Sobrenome </Label>
              <Input
                id="sobrenome"
                name="sobrenome"
                type="text"
                placeholder="Seu sobrenome"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
                className="h-11 bg-background"
              />
            </div>
            </div>

             <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-foreground">E-mail Institucional</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu.nome@ifce.edu.br"
                required
                className="h-11 bg-background"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="role" className="text-foreground">Vinculo</Label>
              <Select required >
                <SelectTrigger className='bg-background w-full h-11' id="role">
                  <SelectValue placeholder="Selecione seu vínculo com o IFCE" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Estudante</SelectItem>
                  <SelectItem value="professor">Docente</SelectItem>
                  <SelectItem value="technician">Técnico</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="campus" className="text-foreground">Campus</Label>
              <Select required>
                <SelectTrigger className='bg-background w-full h-11' id="campus">
                  <SelectValue placeholder="Selecione seu campus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="taua">Tauá</SelectItem>
                  <SelectItem value="boa_viagem">Boa Viagem</SelectItem>
                  <SelectItem value="fortaleza">Fortaleza</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
                <Label
                  htmlFor="password"
                  className="text-foreground"
                >
                  Senha
                </Label>

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                  className="h-11 bg-background"
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
              <p  className='text-xs text-muted-foreground'>
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
            <a href="/login" className="text-primary">Entrar
            </a>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}

export default RegisterPage
