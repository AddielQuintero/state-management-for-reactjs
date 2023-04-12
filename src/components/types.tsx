export interface State {
  value?: string
  loading: boolean
  error: boolean
  delete: boolean
  confirm: boolean
}

export type Action =
  | { type: 'SUBMIT'; payload?: string }
  | { type: 'CONFIRM'; payload?: string }
  | { type: 'ERROR'; payload?: string }
  | { type: 'CHECK'; payload?: string }
  | { type: 'VALUE'; payload?: string }
  | { type: 'RESET'; payload?: string }
