import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

type LoginData = z.infer<typeof loginSchema>

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginData) => {
    console.log(data)
  }

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Input placeholder="Email" type="email" {...register('email')} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        <Input placeholder="Password" type="password" {...register('password')} />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        <Button className="w-full" type="submit">Login</Button>
      </form>
    </div>
  )
}
