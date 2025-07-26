import React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
    <>
      <Head>
        <title>RattleNext</title>
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to RattleNext</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <input className="border p-2" placeholder="Name" {...register('name')} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
        </form>
      </main>
    </>
  )
}
