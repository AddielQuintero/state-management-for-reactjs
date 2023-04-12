import { State } from "@/components"

export interface DeleteItemProps{
  itemName: string
  state: State
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  handleChangeInput: React.ChangeEventHandler<HTMLInputElement>
}

export interface DeleteConfirmationProps {
  itemName: string
  handleConfirm: React.MouseEventHandler<HTMLButtonElement>
  handleReset: React.MouseEventHandler<HTMLButtonElement>
}

export interface DeleteSuccessProps {
  itemName: string
  handleReset: React.MouseEventHandler<HTMLButtonElement>
}
