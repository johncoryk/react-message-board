import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import Footer from './components/Footer';
import SearchGames from './components/SearchGames';
import BoardController from './components/BoardController';

import './styles/style.css';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <Header />
        <div className='main-content'>
          <Route
            exact
            path='/'
            render={() => <BoardController currentPage='index' />}
          />
          <Route
            exact
            path='/board/:id'
            render={props => (
              <BoardController
                currentPage='show'
                currentId={props.match.params.id}
              />
            )}
          />
          <Route
            exact
            path='/topic/:id'
            render={props => (
              <BoardController
                currentPage='topic'
                currentId={props.match.params.id}
              />
            )}
          />
          <Route exact path='/game-search' component={SearchGames} />
          <Route exact path='/login' component={Login}></Route>
        </div>
        <Footer />
      </Router>
    );
  }
}
