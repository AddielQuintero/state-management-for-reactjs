export interface State {
  value: string
  loading: boolean
  error: boolean
  delete: boolean
  confirm: boolean
}

export type Action =
  | { type: 'SET_VALUE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: boolean }
  | { type: 'SET_DELETE'; payload: boolean }
  | { type: 'SET_CONFIRM'; payload: boolean }
