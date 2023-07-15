import React, { useState } from 'react'
import './Tests.scss';
import TestCard from '../../components/TestCard/TestCard';

function Tests({testsList}) {

  return (
    <div className='tests-output'>
      {testsList.map((test, i) => <TestCard key={i} testData={test} testNumber={i}/>)}
    </div>
  )
}

export default Tests