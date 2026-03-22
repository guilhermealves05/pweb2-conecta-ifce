import {z} from 'zod'

export const registerSchema = z.object({
  firstName: z.string().trim().min(2, 'O nome deve ter pelo menos 2 caracteres'),

  lastName: z.string().min(2, 'O sobrenome deve ter pelo menos 2 caracteres').optional(),

  email: z
    .email('E-mail inválido')
    .endsWith('@ifce.edu.br', 'O e-mail deve ser institucional (@ifce.edu.br)').optional(),

  role: z.enum(['student', 'professor', 'technician']).optional(),

  campus: z.enum(['taua', 'boa_viagem', 'fortaleza']).optional(),

  password: z
    .string()
    .min(8, 'A senha deve conter pelo menos 8 caracteres')
    .regex(/[A-Za-z]/, 'A senha deve conter letras')
    .regex(/[0-9]/, 'A senha deve conter números')
})

export type RegisterFormData = z.infer<typeof registerSchema>
