import { CalculatorIcon } from "@heroicons/react/16/solid";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { mortgageTypes } from "../utils.js";

export const Calculator = forwardRef(({ onSubmit }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const amountInputRef = useRef(null);

  const { ref: amountRef, ...amountRegister } = register("amount", {
    required: { value: true, message: "Required" },
    min: { value: 0.01, message: "Must be greater than 0" },
    valueAsNumber: true,
  });

  useImperativeHandle(ref, () => {
    return {
      focusFirstInput: () => amountInputRef.current?.focus(),
    };
  }, []);

  const handleFormSubmit = ({ amount, term, interestRate, type }) => {
    term = term * 12;
    interestRate = interestRate / 100 / 12;

    let monthlyRepayments;
    if (type === mortgageTypes[0]) {
      const numerator = interestRate * Math.pow(1 + interestRate, term);
      const denominator = Math.pow(1 + interestRate, term) - 1;

      monthlyRepayments = amount * (numerator / denominator);
    } else {
      monthlyRepayments = amount * interestRate;
    }

    onSubmit({
      monthlyRepayments,
      yearlyPayment: monthlyRepayments * term,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <label
            htmlFor="amount"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Mortage amount
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600">
              <span
                className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                aria-hidden
              >
                $
              </span>
              <input
                ref={(ref) => {
                  amountInputRef.current = ref;
                  amountRef(ref);
                }}
                type="number"
                id="amount"
                placeholder="0.00"
                className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                aria-invalid={errors.amount ? true : undefined}
                aria-describedby="amount-error"
                {...amountRegister}
              />
            </div>
          </div>
          {errors.amount ? (
            <p id="amount-error" className="mt-2 text-sm text-red-600">
              {errors.amount.message?.toString()}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="term"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Mortage term
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600">
              <input
                type="number"
                id="term"
                placeholder="0"
                className="block w-full border-0 bg-transparent py-1.5 pr-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                aria-invalid={errors.term ? true : undefined}
                aria-describedby="term-error"
                {...register("term", {
                  required: { value: true, message: "Required" },
                  min: { value: 1, message: "Must be greater than 0" },
                  valueAsNumber: true,
                })}
              />
              <span
                className="flex select-none items-center pr-3 text-gray-500 sm:text-sm"
                aria-hidden
              >
                years
              </span>
            </div>
          </div>
          {errors.term ? (
            <p id="term-error" className="mt-2 text-sm text-red-600">
              {errors.term.message?.toString()}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="interestRate"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Interest rate
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600">
              <input
                type="number"
                id="interestRate"
                placeholder="0"
                step="0.01"
                className="block w-full border-0 bg-transparent py-1.5 pr-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                aria-invalid={errors.interestRate ? true : undefined}
                aria-describedby="interestRate-error"
                {...register("interestRate", {
                  required: { value: true, message: "Required" },
                  min: { value: 1, message: "Must be greater than 0" },
                  valueAsNumber: true,
                })}
              />
              <span
                className="flex select-none items-center pr-3 text-gray-500 sm:text-sm"
                aria-hidden
              >
                %
              </span>
            </div>
          </div>
          {errors.interestRate ? (
            <p id="interestRate-error" className="mt-2 text-sm text-red-600">
              {errors.interestRate.message?.toString()}
            </p>
          ) : null}
        </div>
        <div className="lg:col-span-2">
          <label
            htmlFor="type"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Mortage type
          </label>
          <div className="mt-2">
            <select
              id="type"
              className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-lime-600 sm:text-sm/6"
              aria-invalid={errors.type ? true : undefined}
              aria-describedby="type-error"
              {...register("type")}
            >
              {mortgageTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {errors.type ? (
            <p id="type-error" className="mt-2 text-sm text-red-600">
              {errors.type.message?.toString()}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <button
          type="submit"
          className="relative inline-flex items-center justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden
          >
            <CalculatorIcon className="size-4" />
          </div>
          Calculate repayments
        </button>
      </div>
    </form>
  );
});
Calculator.displayName = "Calculator";
