import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
})

type FormData = z.infer<typeof schema>

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className="max-w-md mx-auto space-y-2">
      <h2 className="text-xl font-semibold">Welcome to RattleNext</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Input placeholder="Name" {...register('name')} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
