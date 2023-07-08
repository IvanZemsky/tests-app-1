import React, { useState, useRef } from 'react'
import TestClass from '../../assets/TestClass'
import './Create.scss';
import TestResults from '../../components/TestResults/TestResults'
import TestQuestions from '../../components/TestQuestions/TestQuestions';

function Create() {

  const test = useRef(new TestClass());

  const [questions, setQuestions] = useState(test.current.questions);
  // добавить массив results и поправить функцию addResult

  const [testName, setTestName] = useState('');
  const [testDesc, setTestDesc] = useState('');
  const [resultName, setResultName] = useState('');
  const [resultDesc, setResultDesc] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionDesc, setQuestionDesc] = useState('');

  const addResult = () => {
    test.current.addResults(resultName, resultDesc);
    
    console.log(test.current)
  }

  const addQuestion = () => {
    test.current.addQuestion(questionName, questionDesc);
    setQuestions([...test.current.questions]);
    console.log(test.current.questions);
    console.log(questions);
  }

  const publishTest = () => {
    test.current.addTestInfo(testName, testDesc);
    console.log(test.current)
  }

  return (
    <div className='create-page'>

      <div className="create-block">
        <label>Название теста</label>
        <input
          type="text"
          id="testNameInput"
          maxLength={50}
          onChange={(event) => setTestName(event.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          id="testDescInput"
          maxLength={300}
          onChange={(event) => setTestDesc(event.target.value)}
        />
      </div>

      <div className="create-block">
        <label>Название результата</label>
        <input
          type="text"
          id="resultNameInput"
          maxLength={100}
          onChange={(event) => setResultName(event.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          id="resultDescInput"
          maxLength={1000}
          onChange={(event) => setResultDesc(event.target.value)}
        />

        <button type='button' onClick={addResult}>Добавить результат</button>
      </div>

      {test.current.results.length ? <TestResults/> : null}

      <div className="create-block">
        <label>Название вопроса</label>
        <input
          type="text"
          id="questionNameInput"
          maxLength={100}
          onChange={(event) => setQuestionName(event.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          id="questionDescInput"
          maxLength={1000}
          onChange={(event) => setQuestionDesc(event.target.value)}
        />

        <button type='button' onClick={addQuestion}>Добавить вопрос</button>
      </div>

      {test.current.questions.length > 0 &&
        test.current.questions.map((question, i) => (
          <TestQuestions key={i} question={[question.questionName, question.questionDesc]} number={i+1}/>
        ))
      }

      <button type='button' onClick={publishTest}>Опубликовать</button>

    </div>
  )
}

export default Create