import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './Test.scss';
import QuestionPage from '../QuestionPage/QuestionPage';
import ResultPage from '../ResultPage/ResultPage';


function Test({ testsList }) {

  const [step, setStep] = useState(0);

  const params = useParams();
  const testNumber = params.testNumber;

  //console.log(testsList)

  const currentTest = testsList.at(testNumber);

  const getTestResultScore = () => {
    const newTestResultScore = {};
    currentTest.results.forEach(result => {
      newTestResultScore[result.resultName] = 0;
    })
    return newTestResultScore;
  }

  const [testResultScore, setTestResultScore] = useState(getTestResultScore());

  console.log(testResultScore)
  if (currentTest === undefined) {
    return (
      <>
        <h1>Не найден</h1>
      </>
    )
  }



  return (
    <div className='test-interface'>

      {step < currentTest.questions.length ? (
        <QuestionPage
          step={step}
          setStep={setStep}
          question={currentTest.questions[step]}
          currentTest={currentTest}
          testResultScore={testResultScore} setTestResultScore={setTestResultScore}
        />
      ) : (
        <ResultPage currentTest={currentTest} testResultScore={testResultScore} />
      )}

    </div>
  )
}

export default Test