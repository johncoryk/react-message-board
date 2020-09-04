import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
          </ul>
          <div className='nav-btns'>
            <Link to='/login'>
              <Button text='Login' color='default' size='small' /> 
            </Link>
            <Link to='/dashboard'>
            <Button text='Signup' color='default' size='small' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
