import { Component } from 'react'

type Props = {}

type State = {}

export class Loading extends Component<Props, State> {
  componentWillUnmount(): void {
    console.log('componentWillUnmount')
  }
  
  render() {
    return <p className="text-green-500 text-xl">Cargando...</p>
  }
}
