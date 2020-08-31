import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import Board from './Board';
import MainPage from './MainPage';
import Board from './Board';

import { boards } from '../THROW_AWAY_DATA/data';

export default class BoardController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage,
      currentId: props.currentId || null,
      dataLoaded: false,
      allBoards: null,
      currentBoard: null,
      fireRedirect: false,
      redirectPath: null,
    };

    this.decideWhichToRender = this.decideWhichToRender.bind(this);
    this.findId = this.findId.bind(this);
  }

  // Throw away func to find board/id
  findId(id) {
    boards.find(board => board.id === id);
  }

  componentDidMount() {
    if (this.state.currentPage === 'index') {
      this.setState({
        allBoards: boards,
        dataLoaded: true,
      });
    } else if (this.state.currentPage === 'show') {
      this.setState({
        currentBoard: this.findId(this.state.currentId),
      });
    }
  }

  decideWhichToRender() {
    switch (this.state.currentPage) {
      case 'index':
        return <MainPage allBoards={this.state.allBoards} />;
      case 'show':
        return <Board currentBoard={this.state.currentBoard} />;
      default:
        return <Redirect push to='/' />;
    }
  }

  render() {
    return (
      <div className='container'>
        {this.state.dataLoaded ? this.decideWhichToRender() : <p>Loading...</p>}
        {this.state.fireRedirect && (
          <Redirect push to={this.state.redirectPath} />
        )}
      </div>
    );
  }
}
