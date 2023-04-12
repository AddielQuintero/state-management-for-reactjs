import React, { useState, useEffect, MouseEventHandler } from 'react'
import type { ChangeEventHandler, FormEventHandler } from 'react'
import { State } from './types'
import { DeleteItem, DeleteConfirmation, DeleteSuccess } from '@/features'

const SECURITY_CODE = 'paradigma'

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
    // console.log('useEffect')
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
    setState({ ...state, delete: true, confirm: false })
  }

  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    setState({ ...state, delete: false, confirm: false })
  }

  if (!state.delete && !state.confirm) {
    return (
      <DeleteItem
        itemName="UseState"
        state={state}
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
      />
    )
  } else if (state.confirm) {
    return (
      <DeleteConfirmation
        itemName="UseState"
        handleConfirm={handleConfirm}
        handleReset={handleReset}
      />
    )
  } else {
    return <DeleteSuccess itemName="UseState" handleReset={handleReset} />
  }
}
