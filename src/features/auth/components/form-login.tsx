import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import { UseFormLogin } from './useFormLogin'

function FormLogin() {
  const { state, onSubmit, useForm } = UseFormLogin()

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={useForm.handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-foreground">
          E-mail institucional
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu.nome@ifce.edu.br"
          required
          className="h-11 bg-background"
          {...useForm.register('email')}
        />
        {useForm.errors.email && (
          <p className="text-xs text-destructive">
            {useForm.errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-foreground">
            Senha
          </Label>
          <a href="/recover" className="text-primary text-sm">
            Esqueceu a senha?
          </a>
        </div>

        <div className="relative">
          <Input
            id="password"
            type={state.showPass ? 'text' : 'password'}
            placeholder="Digite sua senha"
            required
            className="h-11 bg-background"
            {...useForm.register('password')}
          />
          {useForm.errors.password && (
            <p className="text-xs text-destructive">
              {useForm.errors.password.message}
            </p>
          )}
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            type="button"
            onClick={() => state.setShowPass((prev) => !prev)}
          >
            {state.showPass ? (
              <EyeOffIcon className="size-4" />
            ) : (
              <EyeIcon className="size-4" />
            )}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="mt-2 h-11"
        disabled={useForm.isSubmitting || !useForm.isValid}
      >
        {useForm.isSubmitting ? (
          <span className='flex items-center gap-4'>
            <Loader2Icon className="size-4 animate-spin" />{' '}
            <span>Entrando...</span>
          </span>
        ) : (
          'Entrar'
        )}
      </Button>

      {state.authError && (
        <p className="text-xs text-destructive">{state.authError}</p>
      )}
    </form>
  )
}

export default FormLogin
