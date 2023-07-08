import React from 'react'

function TestQuestions(props) {
  return (
    <div>
      <h2>Вопрос № {props.number}</h2>
      <p>Вопрос: {props.question[0]}</p>
      <p>Описание: {props.question[1]}</p>
    </div>
  )
}

export default TestQuestions