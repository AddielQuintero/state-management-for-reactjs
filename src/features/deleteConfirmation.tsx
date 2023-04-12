import { CustomButton } from '@/components'
import { DeleteConfirmationProps  } from './types'

export const DeleteConfirmation = (props: DeleteConfirmationProps) => {
  
  return (
    <div className="text-center">
      <h3 className="font-semibold text-2xl">
        ¿Seguro que quieres eliminar {props.itemName}?
      </h3>
      <div className="flex justify-around mt-3">
        <CustomButton
          type="submit"
          className="group relative flex w-[88px] justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          onClick={props.handleConfirm}
        >
          Confirmar
        </CustomButton>

        <CustomButton
          type="submit"
          className="group relative flex w-[88px] justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          onClick={props.handleReset}
        >
          Volver
        </CustomButton>
      </div>
    </div>
  )
}
