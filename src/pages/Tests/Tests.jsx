import React from 'react'
import defaultImage from '../../img/defaultImage.jpg';
import './Tests.scss';
import { Link } from 'react-router-dom';

function Tests() {
  return (
    <div className='tests-output'>

      <div className="test-card">
        <div className="test-image">
          <Link to="/test"><img src={defaultImage} /></Link>
        </div>
        <div className="test-info">
          <h3>
            <Link to="/test">Название</Link>
          </h3>
          <p>
            Ответьте на несколько вопросов, и узнайте к какому блюду из предложенных у вас лежит сердце. Возьмите чай с печеньками, потому что будет о-о-очень вкусно!!! 
          </p>
        </div>
      </div>

    </div>
  )
}

export default Tests