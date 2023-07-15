import React, { useState, useRef, useEffect } from 'react'
import TestClass from '../../assets/TestClass'
import './Create.scss';
import TestResults from '../../components/TestResults/TestResults'
import TestQuestions from '../../components/TestQuestions/TestQuestions';
import TestCreateQuestion from '../../components/TestCreateQuestion/TestCreateQuestion';
import { saveImage } from '../../utils/dragdrop';
import { updateTests } from '../../utils/storage';

function Create(props) {

  const newTest = useRef(new TestClass());

  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);

  const [testName, setTestName] = useState('');
  const [testDesc, setTestDesc] = useState('');
  const [testImage, setTestImage] = useState('');
  const [resultName, setResultName] = useState('');
  const [resultDesc, setResultDesc] = useState('');
  const [resultImage, setResultImage] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionDesc, setQuestionDesc] = useState('');
  const [questionImage, setQuestionImage] = useState('');

  const addResult = () => {
    newTest.current.addResults(resultName, resultDesc, resultImage);
    setResults([...newTest.current.results])

    //console.log(newTest.current.results)
  }

  const addQuestion = () => {
    newTest.current.addQuestion(questionName, questionDesc, questionImage);
    setQuestions([...newTest.current.questions]);

    //console.log(newTest.current.questions);
  }

  useEffect(() => {
    console.log(props.testsList)
  }, [props.testsList])

  const publishTest = () => {
    const newTestInstance = new TestClass(newTest.testInfo, questions, results);
    newTestInstance.addTestInfo(testName, testDesc, testImage);
    const updatedTests = [...props.testsList, newTestInstance];
    props.setTestsList(updatedTests);
    updateTests(updatedTests);
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

        <label>Картинка</label>
        <div className='drag-and-drop'>
          <div className='preview'>
            Картинка успешно загружена
          </div>
          <input
            className='load-file'
            type="file"
            id="testFileInput"
            accept="image/png, image/webp, image/jpeg"
            onChange={(event) => saveImage(event, setTestImage)}
          />
        </div>
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

        <label>Картинка</label>
        <div className='drag-and-drop'>
          <div className='preview'>
            Картинка успешно загружена
          </div>
          <input
            className='load-file'
            type="file"
            id="resultFileInput"
            accept="image/png, image/webp, image/jpeg"
            onChange={(event) => saveImage(event, setResultImage)}
          />
        </div>

        <button type='button' onClick={addResult}>Добавить результат</button>
      </div>

      {newTest.current.results.length > 0 &&
        newTest.current.results.map((result, i) => (
          <TestResults key={i} result={result} number={i + 1} />
        ))
      }

      {newTest.current.results.length > 0 && (
        <TestCreateQuestion
          setQuestionName={setQuestionName}
          setQuestionDesc={setQuestionDesc}
          setQuestionImage={setQuestionImage}
          addQuestion={addQuestion}
        />
      )}

      {newTest.current.questions.length > 0 &&
        newTest.current.questions.map((question, i) => (
          <TestQuestions
            key={i}
            newTest={newTest.current}
            question={question}
            number={i}
          />
        ))
      }

      <button type='button' onClick={publishTest}>Опубликовать</button>

    </div>
  )
}

export default Create