import React, { useRef } from 'react'
import defaultImage from '../../img/defaultImage.jpg';
import './Test.scss';


function Test() {
  let answer = useRef({});

  const addAnswer = (event) => {
    answer.current = event.target.dataset?.name;
    console.log(answer);
  }

  return (
    <div className='test-interface'>
      <div className='question-info'>
        <h5>Мой вопрос</h5>
        <p>Очень огромное описание вопроса</p>
      </div>
      <div className='question-body'>
        <div className='question-image'>
          <img src={defaultImage} />
        </div>
        <ul className='answer-items'>
          <li className='answer-item' ref={answer} data-name="Выбор 1" onClick={addAnswer}>Выбор 1</li>
          <li className='answer-item' ref={answer} data-name="Выбор 2" onClick={addAnswer}>Выбор 2</li>
          <li className='answer-item' ref={answer} data-name="Выбор 3" onClick={addAnswer}>Выбор 3</li>
          <li className='answer-item' ref={answer} data-name="Выбор 4" onClick={addAnswer}>Выбор 4</li>
        </ul>
        <div className='question-submit'>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.7 17.3q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"></path>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Test