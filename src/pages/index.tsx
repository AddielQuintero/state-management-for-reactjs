import { ClassState, UseState, UseReducer } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly ">
      <span className="absolute top-3 left-3 bg-gray-200 text-gray-800 font-medium rounded-md px-4 py-2">
        Security code: paradigma
      </span>

      <UseState />
      <div className="w-full border-t border-green-500"></div>
      <UseReducer />
      <div className="w-full border-t border-green-500"></div>
      <ClassState />
    </main>
  )
}
