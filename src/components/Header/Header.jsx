import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='header-nav'>
      <ul className='header-links'>
         <li className='header-link'>
            <Link to="/">Тесты</Link>
         </li>
         <li className='header-link'>
            <Link to="/create">Создать</Link>
         </li>
      </ul>
    </nav>
  )
}

export default Header