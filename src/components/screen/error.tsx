import { Component } from 'react'

type Props = {}

type State = {}

export class Error extends Component<Props, State> {
  componentWillUnmount(): void {
    console.log('componentWillUnmount')
  }

  render() {
    return <p className="text-red-500 text-xs text-left">Incorrect code</p>
  }
}
