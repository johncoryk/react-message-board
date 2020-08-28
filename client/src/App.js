import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import SearchGames from './components/SearchGames';

import './styles/style.css';

function App() {
  return (
    <Router>
      <Header />
      <div className='main-content'>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/game-search' component={SearchGames} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
