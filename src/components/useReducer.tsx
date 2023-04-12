import React, { useState, useEffect, useReducer } from 'react'
import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'
import { State, Action } from './types'
import { DeleteItem, DeleteConfirmation, DeleteSuccess } from '@/features'

const SECURITY_CODE = 'paradigma'

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)

  useEffect(() => {
    if (state.loading) {
      const timeout = setTimeout(() => {
        state.value === SECURITY_CODE
          ? dispatch({ type: 'CONFIRM' })
          : dispatch({ type: 'ERROR' })
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [state.loading])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    dispatch({ type: 'SUBMIT' })
  }

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({ type: 'VALUE', payload: event.target.value })
  }

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: 'CHECK' })
  }

  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: 'RESET' })
  }

  if (!state.delete && !state.confirm) {
    return (
      <DeleteItem
        itemName="UseReducer"
        state={state}
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
      />
    )
  } else if (state.confirm) {
    return (
      <DeleteConfirmation
        itemName="UseReducer"
        handleConfirm={handleConfirm}
        handleReset={handleReset}
      />
    )
  } else {
    return <DeleteSuccess itemName="UseReducer" handleReset={handleReset} />
  }
}

const initialState: State = {
  value: '',
  error: false,
  loading: false,
  delete: false,
  confirm: false,
}

const reducer = (state: State, action: Action): State => {
  const actions = {
    SUBMIT: () => ({ ...state, loading: true }),
    CONFIRM: () => ({ ...state, value: '', error: false, loading: false, confirm: true }),
    ERROR: () => ({ ...state, error: true, loading: false }),
    CHECK: () => ({ ...state, delete: true, confirm: false }),
    VALUE: () => ({ ...state, value: action.payload }),
    RESET: () => ({ ...state, confirm: false, delete: false }),
  }

  return actions[action.type]() || state
}
