import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchGames from './components/SearchGames';
import BoardController from './components/BoardController';

import './styles/style.css';



export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err));
  }

  logout() {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
        })
      }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault();
    console.log(data);
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err));
  }

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
