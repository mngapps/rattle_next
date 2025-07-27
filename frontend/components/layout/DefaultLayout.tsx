import { ReactNode } from "react"
import Head from "next/head"

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>RattleNext</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-900 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-semibold">RattleNext</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
      </div>
    </>
  )
}
