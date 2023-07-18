import React from 'react'

function ResultPage({ currentTest, testResultScore }) {

   let maxResultName = '';
   let maxResultScore = -Infinity;

   for (let result in testResultScore) {
      const value = testResultScore[result];

      if (value > maxResultScore) {
         maxResultScore = value;
         maxResultName = result;
      }
   }

   const currentResult = currentTest.results.find(result => result.resultName === maxResultName);

   return (
      <div>
         <h2>Результат: {maxResultName}</h2>
         <p>
            Описание: {currentResult.resultDesc}
         </p>
         <img src={currentResult.resultImage} />
      </div>
   )
}

export default ResultPage