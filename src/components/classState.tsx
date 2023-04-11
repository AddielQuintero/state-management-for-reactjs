import React, { Component } from 'react'
import type { ChangeEventHandler, FormEventHandler } from 'react'
import { CustomInput, CustomButton } from '.'
import { Loading } from './'

type Props = {}

type State = {
  error: boolean
  loading: boolean
  value: string | number
}

const SECURITY_CODE = 'paradigma'

export class ClassState extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      error: false,
      loading: false,
      value: '',
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    console.log('componentDidUpdate')
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false })
        this.state.value === SECURITY_CODE
          ? this.setState({ value: '', error: false })
          : this.setState({ error: true })
      }, 2000)
    }
  }

  handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
  }

  handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    console.log(`value: ${this.state.value}`)

    return (
      <div className="text-center">
        <h3 className="font-semibold text-2xl pb-3">Eliminar ClassState</h3>
        <p>Por favor, escribe el código de seguridad</p>
        {this.state.loading && <Loading />}
        <form
          className="flex justify-between mt-8"
          action="#"
          method="POST"
          onSubmit={this.handleSubmit}
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
              value={this.state.value}
              onChange={this.handleChangeInput}
              className="relative block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="Codigo de Seguridad"
            />
            {this.state.error && !this.state.loading && (
              <p className="text-red-500 text-xs text-left">
                Código incorrecto
              </p>
            )}
          </div>
          <div className="pl-2">
            <CustomButton
              type="submit"
              className={`group relative flex  justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
                this.state.loading ? 'bg-gray-400 hover:bg-gray-400' : null
              }`}
              disabled={this.state.loading}
            >
              Confirmar
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
