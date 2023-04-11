import React, { useState, useEffect, MouseEventHandler } from 'react'
import { CustomInput, CustomButton } from '.'
import type { ChangeEventHandler, FormEventHandler } from 'react'
import { DeleteConfirmation, DeleteSuccess } from '@/features'

const SECURITY_CODE = 'paradigma'

type State = {
  error: boolean
  loading: boolean
  value: string
  delete: boolean
  confirm: boolean
}

export const UseState = () => {
  const [state, setState] = useState<State>({
    value: '',
    error: false,
    loading: false,
    delete: false,
    confirm: false,
  })

  console.log(state)

  useEffect(() => {
    console.log('useEffect')
    if (state.loading) {
      const timeout = setTimeout(() => {
        state.value === SECURITY_CODE
          ? setState({
              ...state,
              value: '',
              error: false,
              loading: false,
              confirm: true,
            })
          : setState({ ...state, error: true, loading: false })
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [state.loading])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    setState({ ...state, loading: true })
  }

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({ ...state, value: event.target.value })
  }

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('confirmate')
    setState({ ...state, delete: true, confirm: false })
  }

  const handleBack: MouseEventHandler<HTMLButtonElement> = () => {
    setState({ ...state, confirm: false })
  }

  const handleRetrieve: MouseEventHandler<HTMLButtonElement> = () => {
    setState({ ...state, delete: false })
  }

  if (!state.delete && !state.confirm) {
    return (
      <div className="text-center">
        <h3 className="font-semibold text-2xl pb-3">Eliminar UseState</h3>
        <p>Por favor, escribe el código de seguridad</p>
        {state.loading && (
          <p className="text-green-500 text-xl ">Cargando...</p>
        )}
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
              value={state.value}
              onChange={handleChangeInput}
            />
            {state.error && !state.loading && (
              <p className="text-red-500 text-xs text-left">
                Código incorrecto
              </p>
            )}
          </div>
          <div className="pl-2">
            <CustomButton
              type="submit"
              className={`group relative flex  justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
                state.loading ? 'bg-gray-400 hover:bg-gray-400' : null
              }`}
              disabled={state.loading}
            >
              Confirmar
            </CustomButton>
          </div>
        </form>
      </div>
    )
  } else if (state.confirm) {
    return (
      <DeleteConfirmation
        handleConfirm={handleConfirm}
        handleBack={handleBack}
      />
    )
  } else {
    return <DeleteSuccess handleRetrieve={handleRetrieve} />
  }
}
