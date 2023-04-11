import { useState, useEffect } from 'react'
import { CustomInput, CustomButton } from '.'
import type { ChangeEventHandler, FormEventHandler } from 'react'

const SECURITY_CODE = 'paradigma'

export const UseState = () => {
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [value, setValue] = useState<string | number>('')

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
        if (value === SECURITY_CODE) {
          setValue(' ')
          setError(false)
        } else setError(true)
      }, 2000)
    }
  }, [loading])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    setLoading(true)
  }

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  //   console.log(`value: ${value}`)
  return (
    // <>
    <div className="text-center">
      <h3 className="font-semibold text-2xl pb-3">Eliminar UseState</h3>
      <p>Por favor, escribe el código de seguridad</p>
      {loading && <p className="text-green-500 text-xl ">Cargando...</p>}
      <form
        className="flex justify-between mt-8"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="rounded-md shadow-sm">
          <label htmlFor="email-address" className="sr-only">
            Codigo de Seguridad
          </label>
          <CustomInput
            id="codigo-seguridad"
            name="codigoSeguridad"
            type="text"
            required
            className="relative block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Codigo de Seguridad"
            value={value}
            onChange={handleChangeInput}
          />
          {error && !loading && (
            <p className="text-red-500 text-xs text-left">Código incorrecto</p>
          )}
        </div>
        <div className="pl-2">
          <CustomButton
            type="submit"
            className={`group relative flex  justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
              loading ? 'bg-gray-400 hover:bg-gray-400' : null
            }`}
            disabled={loading}
          >
            Confirmar
          </CustomButton>
        </div>
      </form>
    </div>
    // </>
  )
}
