import React from 'react';
import { Link } from 'react-router-dom';

import Button from './utility/Button';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <h1 className='logo'>GAMECHAT</h1>
        <div className='links-container'>
          <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/game-search'>Search Games</Link>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='nav-btns'>
          <Button text='Login' color='default' size='small' />
          <Button text='Signup' color='default' size='small' />
        </div>
      </div>
    </header>
  );
};

export default Header;
