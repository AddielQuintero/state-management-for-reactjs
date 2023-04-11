// Interface for props of DeleteSuccess
export interface DeleteSuccessProps {
  handleRetrieve: React.MouseEventHandler<HTMLButtonElement>
}

// Interface for props of DeleteConfirmation
export interface DeleteConfirmationProps {
  handleConfirm: React.MouseEventHandler<HTMLButtonElement>
  handleBack: React.MouseEventHandler<HTMLButtonElement>
}

// Interface for props of DeleteItem
export interface DeleteItemProps {
  name: string
  // handleBack: React.MouseEventHandler<HTMLButtonElement>
}
