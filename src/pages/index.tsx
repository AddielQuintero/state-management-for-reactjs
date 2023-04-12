import { ClassState, UseState, UseReducer } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around ">
      <UseState />
      <div className="w-full border-t border-green-500" ></div>
      <UseReducer />
    </main>
  )
}
