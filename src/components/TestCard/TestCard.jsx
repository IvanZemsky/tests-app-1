import React from 'react'
import { Link, useParams } from 'react-router-dom'
import defaultImage from '../../img/defaultImage.jpg';

function TestCard({testData, testNumber}) {
   return (
      <div className="test-card">
         <div className="test-image">
            <Link to={"/test/"+testNumber}><img src={testData.testInfo.testImage} /></Link>
         </div>
         <div className="test-info">
            <h3>
               <Link to={"/test/"+testNumber}>{testData.testInfo.testName}</Link>
            </h3>
            <p>
               {testData.testInfo.testDesc}
            </p>
         </div>
      </div>
   )
}

export default TestCard