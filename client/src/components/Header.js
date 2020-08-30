import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from './utility/Button';
import logo from '../img/gamechat_logo_v1.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <img className='logo' src={logo} alt='gamechat logo' />
        <div className='links-container'>
          <ul className='links'>
            <li>
              <NavLink activeClassName='active' exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' exact to='/game-search'>
                Search Games
              </NavLink>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className='nav-btns'>
            <Button text='Login' color='default' size='small' />
            <Button text='Signup' color='default' size='small' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
