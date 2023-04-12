import { CustomButton } from '@/components'
import { DeleteSuccessProps } from './types'

export const DeleteSuccess = (props: DeleteSuccessProps) => {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-2xl">{props.itemName} fue eliminado</h3>
      <div className="mt-3">
        <CustomButton
          type="submit"
          className="group relative flex  justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600  mx-auto"
          onClick={props.handleReset}
        >
          Recuperar {props.itemName}
        </CustomButton>
      </div>
    </div>
  )
}
