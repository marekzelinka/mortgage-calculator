import { formatCurrency } from '../utils.js'

export function Results() {
  return (
    <div>
      <h3 className="text-xl font-bold text-white">Your results</h3>
      <p className="mt-2 text-sm text-gray-400">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "Calculate repayments"
        again.
      </p>
      <dt className="mt-6 divide-y divide-white/5 rounded-md border-t-4 border-lime-500 bg-gray-900 px-4">
        <div className="py-5">
          <dt className="text-sm/6 text-gray-400">Your monthly repayments</dt>
          <dd className="mt-2 text-4xl font-semibold tracking-tight text-lime-500">
            {formatCurrency('1797.74')}
          </dd>
        </div>
        <div className="py-5">
          <dt className="text-sm/6 text-gray-400">
            Total you'll repay over the term
          </dt>
          <dd className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency('1797.74')}
          </dd>
        </div>
      </dt>
    </div>
  )
}
