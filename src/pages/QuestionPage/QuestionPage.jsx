import React, { useRef } from 'react'
import defaultImage from '../../img/defaultImage.jpg';

function QuestionPage({ step, setStep, question, currentTest, ...props}) {

   const submitButton = useRef(null);

   console.log(currentTest)

   const submitClick = (event) => {
      event.preventDefault();
      const selectedAnswer = document.querySelector(`input[name='${question.questionName}']:checked`);

      if (!selectedAnswer) {
         return alert('Please select any answer')
      }

      //props.testResultScore[selectedAnswer.dataset.result] += +selectedAnswer.dataset.score;
      props.setTestResultScore({...props.testResultScore, 
         [selectedAnswer.dataset.result]:  props.testResultScore[selectedAnswer.dataset.result] += +selectedAnswer.dataset.score
      })
      console.log(props.testResultScore)

      setStep(step + 1);
      selectedAnswer.checked = false;
      submitButton.current.classList.add('disabled');
   }

   const answerHandler = () => {
      submitButton.current.classList.remove('disabled');
   }

   return (
      <>
         <div className='question-info'>
            <h2>{currentTest.testInfo.testName}</h2>
            <h5>Вопрос №{step + 1}. {question.questionDesc}</h5>
            <p>{question.questionName}</p>
         </div>

         <form id="answers-form" className='question-body' onSubmit={(event) => submitClick(event)}>

            <div className='question-image'>
               <img src={question.questionImage} />
            </div>

            <div className='answer-items'>

               {question.answers.map((answer, i) => (
                  <label className="answer-item" key={i} htmlFor={"answer" + i} onClick={answerHandler}>
                     <input type='radio'
                        id={"answer" + i}
                        data-score={answer.answerScore}
                        name={question.questionName}
                        data-result={answer.answerResult}
                     />
                     <span>{answer.answerText}</span>
                  </label>

               ))}

            </div>

            <button type="submit" className="question-submit disabled" ref={submitButton}>
               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8.7 17.3q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"></path>
               </svg>
            </button>

         </form>
      </>
   )
}

export default QuestionPage

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