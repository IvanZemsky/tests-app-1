import React, { useState, useRef } from 'react'
import TestClass from '../../assets/TestClass'
import './Create.scss';
import TestResults from '../../components/TestResults/TestResults'
import TestQuestions from '../../components/TestQuestions/TestQuestions';

function Create() {

  const newTest = useRef(new TestClass());

  const [questions, setQuestions] = useState(newTest.current.questions);
  const [results, setResults] = useState(newTest.current.results);

  const [testName, setTestName] = useState('');
  const [testDesc, setTestDesc] = useState('');
  const [resultName, setResultName] = useState('');
  const [resultDesc, setResultDesc] = useState('');
  const [resultImage, setResultImage] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionDesc, setQuestionDesc] = useState('');

  const addResult = () => {
    newTest.current.addResults(resultName, resultDesc, resultImage);
    setResults([...newTest.current.results])
  }

  const addQuestion = () => {
    newTest.current.addQuestion(questionName, questionDesc);
    setQuestions([...newTest.current.questions]);
    console.log(newTest.current.questions);
  }

  const publishTest = () => {
    newTest.current.addTestInfo(testName, testDesc);
    console.log(newTest.current)
  }

  const setStatus = (el, status) => {
    const availabledStatuses = ['error', 'success'];
    availabledStatuses.map((st) => el.classList.remove(st));
    if (availabledStatuses.includes(status)) {
      return el.classList.add(status);
    }
  }

  const validateFileType = (file) => {
    console.log(file)
    const availabledTypes = ['image/png', 'image/webp', 'image/jpeg'];
    return availabledTypes.includes(file.type);
  }

  const setPreview = (el, preview) => {
    if (!preview)
      el.style.visibility = 'hidden';

    el.innerHTML = preview;
  }

  const convertImage = (event) => {
    const imageFiles = event.target.files;
    const previewEl = event.target.parentElement.querySelector('.preview');
    if (!imageFiles) {
      setStatus(event.target.parentElement, 'error');
      setPreview(previewEl, 'Вы не загрузили не одно изображение')
      setResultImage('');
      return;
    }

    console.log(imageFiles)
    for (const file of imageFiles) {
      if (!validateFileType(file)) {
        setStatus(event.target.parentElement, 'error');
        setPreview(previewEl, 'Неверный тип изображения');
        setResultImage('');
        return;
      }

      const img = document.createElement('img');
      img.alt = 'Загруженная картинка';

      // save img as base64 string
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        img.src = reader.result;
        console.log(img);
        setStatus(event.target.parentElement, 'success');
        setPreview(previewEl, img.outerHTML);
        setResultImage(reader.result);
      }

      reader.onerror = function (error) {
        console.log('Error: ', error);
        setStatus(event.target.parentElement, 'error');
        setPreview(previewEl, 'Не удалось конвертировать изображение');
        setResultImage('');
      };



      // todo: add save 
    }
    // setResultImage()
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
            onChange={convertImage}
          />
        </div>

        <button type='button' onClick={addResult}>Добавить результат</button>
      </div>

      {newTest.current.results.length > 0 &&
        newTest.current.results.map((result, i) => (
          <TestResults key={i} result={result} number={i + 1} />
        ))
      }

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