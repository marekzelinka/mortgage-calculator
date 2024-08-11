import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Calculator } from './components/Calculator.jsx'
import { EmptyResults } from './components/EmptyResults.jsx'
import { Results } from './components/Results.jsx'
import { mortgageTypes } from './utils.js'

function App() {
  const [results, setResults] = useState(null)

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      type: mortgageTypes[0],
    },
  })

  const handleReset = () => {
    setResults(null)
    methods.reset()
  }

  return (
    <main className="isolate flex min-h-svh flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px] lg:max-w-4xl">
        <div className="overflow-hidden bg-white p-2 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl lg:flex">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="flex items-center justify-between gap-x-4">
              <h1 className="text-base/6 font-semibold text-gray-900">
                Mortgage Calculator
              </h1>
              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm/6 font-semibold text-sky-600 underline hover:text-sky-500"
                >
                  Clear all
                </button>
              </div>
            </div>
            <div className="mt-10">
              <FormProvider {...methods}>
                <Calculator onSubmit={setResults} />
              </FormProvider>
            </div>
          </div>
          <div className="-m-2 max-lg:-mt-2 lg:w-full lg:max-w-md lg:flex-none">
            <div className="bg-gray-800 px-10 max-lg:py-24 sm:px-12 lg:flex lg:h-full lg:flex-col lg:justify-center lg:rounded-bl-[theme(spacing.16)] lg:pl-10">
              {results ? <Results results={results} /> : <EmptyResults />}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
