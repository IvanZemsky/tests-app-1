import React, { useRef, useState } from 'react'

function TestAnswers({ newTest, question, number }) {

   const [answerText, setAnswerText] = useState('');
   const [answerResult, setAnswerResult] = useState(newTest.results[0]?.resultName);
   const [answerScore, setAnswerScore] = useState(1);

   const saveButton = useRef(null);

   return (
      <div className='answer-block'>
         <p>Ответ №{number + 1}</p>

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
               newTest.addAnswer(question.questionName, number, answerText, answerResult, answerScore);
               console.log(newTest);
            }}
         >
            Сохранить
         </button>
      </div>
   )
}

export default TestAnswers