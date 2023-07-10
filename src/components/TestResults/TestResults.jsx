import React from 'react'

function TestResults({result, number}) {
  return (
    <div>
      <div className='result-block'>
        <h2 className='results-title'>Результат №{number}</h2>
        <p>Название: {result.resultName}</p>
        <p>Описание: {result.resultDesc}</p>
        <p>Очки: {result.resultScore}</p>
      </div>
    </div>
  )
}

export default TestResults
