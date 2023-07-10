import React, { useState } from 'react'

function TestQuestions({newTest, question, ...props}) {

  //const [answers, setAnswers] = useState(newTest.answers);

  const addQuestionAnswer = () => {

  }


  return (
    <div className='question-block'>
      <h2 className='question-title'>Вопрос № {props.number}</h2>
      <p>Вопрос: {question.questionName}</p>
      <p>Описание: {question.questionDesc}</p>
      {(
        <div className='answer-block'>
          <input id="answer-text" placeholder="Текст ответа" type="text"/>
          <div className="answer-wrap">
            <select id="answer-result">
              {newTest.results.map((result, i) => (
                <option value={result.resultName}>{result.resultName}</option>
              ))}
            </select>
            <input id="answer-score" type="number" placeholder="0"/>
          </div>
        </div>
      )}
      <button type='button' onClick={addQuestionAnswer}>Добавить ответ</button>
    </div>
  )
}

export default TestQuestions