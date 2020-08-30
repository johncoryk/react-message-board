import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchGames from './components/SearchGames';
import BoardController from './components/BoardController';

import './styles/style.css';

function App() {
  return (
    <Router>
      <Header />
      <div className='main-content'>
        <Route
          exact
          path='/'
          render={() => <BoardController currentPage='index' />}
        />
        <Route exact path='/game-search' component={SearchGames} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
