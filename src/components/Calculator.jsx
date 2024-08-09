import { Radio, RadioGroup } from '@headlessui/react'
import { CalculatorIcon } from '@heroicons/react/20/solid'

export function Calculator() {
  const types = [{ name: 'Repayment' }, { name: 'Interest Only' }]

  return (
    <form>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <label
            htmlFor="mortgageAmount"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Mortage amount
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600">
              <span
                className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                aria-hidden
              >
                $
              </span>
              <input
                type="number"
                name="mortgageAmount"
                id="mortgageAmount"
                placeholder="0.00"
                className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="mortgageTerm"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Mortage term
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600">
              <input
                type="number"
                name="mortgageTerm"
                id="mortgageTerm"
                placeholder="0"
                className="block w-full border-0 bg-transparent py-1.5 pr-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              />
              <span
                className="flex select-none items-center pr-3 text-gray-500 sm:text-sm"
                aria-hidden
              >
                years
              </span>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="interestRate"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Interest rate
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600">
              <input
                type="number"
                name="interestRate"
                id="interestRate"
                placeholder="0"
                className="block w-full border-0 bg-transparent py-1.5 pr-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              />
              <span
                className="flex select-none items-center pr-3 text-gray-500 sm:text-sm"
                aria-hidden
              >
                %
              </span>
            </div>
          </div>
        </div>
        <fieldset className="lg:col-span-2" aria-label="Choose a mortgage type">
          <div>
            <div className="text-sm/6 font-medium text-gray-900">
              Mortgage Type
            </div>
          </div>
          <RadioGroup
            name="mortgageType"
            className="mt-2 -space-y-px rounded-md bg-white"
          >
            {types.map((type) => (
              <Radio
                key={type.name}
                value={type}
                className="group relative flex cursor-pointer gap-x-3 border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md focus:outline-none data-[checked]:z-10 data-[checked]:border-sky-200 data-[checked]:bg-sky-50"
                aria-label={type.name}
              >
                <span
                  className="mt-0.5 flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-sky-600 group-data-[focus]:ring-2 group-data-[focus]:ring-sky-600 group-data-[focus]:ring-offset-2"
                  aria-hidden
                >
                  <span className="size-1.5 rounded-full bg-white" />
                </span>
                <div>
                  <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-sky-900">
                    {type.name}
                  </span>
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>
      </div>
      <div className="mt-6 flex flex-col">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden
          >
            <CalculatorIcon className="size-5" />
          </div>
          Calculate repayments
        </button>
      </div>
    </form>
  )
}
