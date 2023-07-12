import React, { useRef, useState, useEffect } from 'react'
import './TestQuestions.scss';

function TestQuestions({ newTest, question, ...props }) {

  const [answersAmount, setAnswersAmount] = useState(0);

  const [answerText, setAnswerText] = useState('');
  const [answerResult, setAnswerResult] = useState(newTest.results[0]?.resultName);
  const [answerScore, setAnswerScore] = useState(1);

  /*
  const [prevStates, setPrevStates] = useState({
    prevAnswerText: answerText,
    prevAnswerResult: answerResult,
    prevAnswerScore: answerScore,
  });

  useEffect(() => {
    setPrevStates({
      prevAnswerText: answerText,
      prevAnswerResult: answerResult,
      prevAnswerScore: answerScore,
    });
  }, [answerText, answerResult, answerScore]);
  */

  const saveButton = useRef(null);
  

  // использовать key={i} у <div className='answer-block' key={i}>
  return (
    <div className='question-block'>
      <h2 className='question-title'>Вопрос № {props.number}</h2>
      <p>Вопрос: {question.questionName}</p>
      <p>Описание: {question.questionDesc}</p>

      {[...new Array(answersAmount)].map((answerNumber, i) => (
        <div className='answer-block' key={i}>
        <p>Ответ №{i + 1}</p>

        <input 
          id="answer-text"
          value={answerText} 
          onChange={(event) => setAnswerText(event.target.value)}
          placeholder="Текст ответа" 
          type="text" 
        />

        <div className="answer-wrap">
          <select id="answer-result" value={answerResult} onChange={(event) => setAnswerResult(event.target.value)}>
            {newTest.results.map((result, i) => (
              <option key={i} value={result.resultName}>{result.resultName}</option>
            ))}
          </select>
          <input
            id="answer-score"
            type="number"
            value={answerScore}
            onChange={(event) => setAnswerScore(+event.target.value)}
          />
        </div>
        <button 
          className="answer-save"
          ref={saveButton}
          onClick={(event) => {
            event.target.disabled = true;
            newTest.addAnswer(question.questionName, answerText, answerResult, answerScore);
            console.log(newTest);

            
          }}
        >
          Сохранить
        </button>
      </div>
      ))}

      <button type='button' onClick={() => setAnswersAmount(answersAmount + 1)}>Добавить ответ</button>
    </div>
  )
}

export default TestQuestions