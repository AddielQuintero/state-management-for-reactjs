import { CustomInput, CustomButton, Loading, Error } from '@/components'
import { DeleteItemProps } from './types'

export const DeleteItem = (props: DeleteItemProps) => {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-2xl pb-3">Delete {props.itemName}</h3>
      <p>Please enter the security code</p>
      {props.state.loading && <Loading />}
      <form
        className="flex justify-between mt-8"
        action="#"
        method="POST"
        onSubmit={props.handleSubmit}
      >
        <div className="rounded-md shadow-sm">
          <label htmlFor="email-address" className="sr-only">
            Security code
          </label>
          <CustomInput
            id="security-code"
            name="SecurityCode"
            type="text"
            required
            className="relative block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Security code"
            value={props.state.value}
            onChange={props.handleChangeInput}
          />
          {props.state.error && !props.state.loading && <Error />}
        </div>
        <div className="pl-2">
          <CustomButton
            type="submit"
            className={`group relative flex  justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
              props.state.loading ? 'bg-gray-400 hover:bg-gray-400' : null
            }`}
            disabled={props.state.loading}
          >
            Confirm
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
