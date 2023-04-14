import React, { Component } from 'react'
import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'
import { DeleteItem, DeleteConfirmation, DeleteSuccess } from '@/features'
import { State, Props } from '.'

const SECURITY_CODE = 'paradigma'

export class ClassState extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: '',
      error: false,
      loading: false,
      delete: false,
      confirm: false,
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    console.log('componentDidUpdate')
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false })
        this.state.value === SECURITY_CODE
          ? this.setState({ value: '', error: false, confirm: true })
          : this.setState({ error: true })
      }, 2000)
    }
  }

  handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
  }

  handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    this.setState({ value: target.value })
  }

  handleConfirm: MouseEventHandler<HTMLButtonElement> = () => {
    this.setState({ confirm: false, delete: true })
  }

  handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    this.setState({ delete: false, confirm: false })
  }

  render() {
    console.log(this.state)

    if (!this.state.delete && !this.state.confirm) {
      return (
        <DeleteItem
          itemName="ClassState"
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChangeInput={this.handleChangeInput}
        />
      )
    } else if (this.state.confirm) {
      return (
        <DeleteConfirmation
          itemName="ClassState"
          handleConfirm={this.handleConfirm}
          handleReset={this.handleReset}
        />
      )
    } else {
      return (
        <DeleteSuccess itemName="ClassState" handleReset={this.handleReset} />
      )
    }
  }
}
