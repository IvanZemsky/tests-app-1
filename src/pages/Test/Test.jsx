import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import defaultImage from '../../img/defaultImage.jpg';
import './Test.scss';


function Test({testsList}) {

  const [step, setStep] = useState(0);

  const params = useParams();
  const testNumber = params.testNumber;
  //console.log(testsList)
  
  const currentTest = testsList.at(testNumber);
  console.log(currentTest)
  if (currentTest === undefined) {
    return (
      <>
        <h1>Не найден</h1>
      </>
    )
  }


  /*
  let answers = useRef([]);

  const changeActiveState = (el, state = false) => {
    return state ? el.classList.add('active') : el.classList.remove('active');
  }

  const addAnswer = (event) => {    

    const selectedAnswer = event.target.dataset?.name;
    if (!selectedAnswer) {
      return;
    }
  
    let selectedAnswerState = true;
    for (const answer of answers.current) {
      if (answer === selectedAnswer) {
        answers.current = answers.current.filter(el => el !== answer);
        selectedAnswerState = false;
      }
    }

    changeActiveState(event.target, selectedAnswerState);
    if (selectedAnswerState) {
      answers.current.push(selectedAnswer);
    }

    const submitBtn = document.querySelector('.question-submit');
    if (!answers.current.length) {
      return submitBtn.classList.add('disabled');
    }

    return submitBtn.classList.remove('disabled');
  }
  */

  return (
    <div className='test-interface'>
      <div className='question-info'>
        <h2>{currentTest.testInfo.testName}</h2>
        <h5>Мой вопрос</h5>
        <p>Это очень большое описание для вопроса, я даже не знаю, что сюда еще написать, чтобы оно стало еще больше и шире</p>
      </div>
      <div className='question-body'>
        <div className='question-image'>
          <img src={defaultImage} />
        </div>
        <ul className='answer-items'>
          <li className='answer-item' data-name="Выбор 1">Выбор 1</li>
          <li className='answer-item' data-name="Выбор 2">Выбор 2</li>
          <li className='answer-item' data-name="Выбор 3">Выбор 3</li>
          <li className='answer-item' data-name="Выбор 4">Выбор 4</li>
        </ul>
        <div className="question-submit disabled">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.7 17.3q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"></path>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Test