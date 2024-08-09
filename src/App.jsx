import { Calculator } from './components/Calculator.jsx'
import { Results } from './components/Results.jsx'

function App() {
  return (
    <main className="isolate flex min-h-svh flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px] lg:max-w-4xl">
        <div className="overflow-hidden bg-white p-2 shadow sm:rounded-lg lg:flex">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="flex items-center justify-between gap-x-4">
              <h1 className="text-base/6 font-semibold text-gray-900">
                Mortgage Calculator
              </h1>
              <div>
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-sky-600 underline hover:text-sky-500"
                >
                  Clear all
                </button>
              </div>
            </div>
            <div className="mt-10">
              <Calculator />
            </div>
          </div>
          <div className="-m-2 max-lg:-mt-2 lg:w-full lg:max-w-md lg:flex-none">
            <div className="bg-gray-800 p-12 max-lg:py-24 lg:flex lg:h-full lg:flex-col lg:justify-center lg:rounded-bl-[theme(spacing.16)]">
              <Results />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
