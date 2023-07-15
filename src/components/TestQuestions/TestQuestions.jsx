import React, { useRef, useState } from 'react'
import './TestQuestions.scss';
import TestAnswers from '../TestAnswers/TestAnswers';

function TestQuestions({ newTest, question, ...props }) {

  const [answersAmount, setAnswersAmount] = useState(0);

  return (
    <div className='question-block'>
      <h2 className='question-title'>Вопрос № {props.number + 1}</h2>
      <p>Вопрос: {question.questionName}</p>
      <p>Описание: {question.questionDesc}</p>
      <img src={question.questionImage} width="140px" height="auto"/>

      {[...new Array(answersAmount)].map((answerNumber, i) => (
        <TestAnswers key={i} newTest={newTest} question={question} number={i} />
      ))}

      <button type='button' onClick={() => setAnswersAmount(answersAmount + 1)}>Добавить ответ</button>
    </div>
  )
}

export default TestQuestions