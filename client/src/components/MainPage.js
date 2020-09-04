import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from '../components/utility/LargeHeading';
import SubHeading from '../components/utility/SubHeading';
import GameHeading from './utility/GameHeading';
import BoardCreate from './BoardCreate';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBoards: this.props.allBoards,
    };

    this.boardSubmit = this.boardSubmit.bind(this);
  }

  boardSubmit(method, event, data) {
    event.preventDefault();
    console.log('submit', data);
    fetch(`/api/boards/`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          allBoards: [...this.state.allBoards, data.data.board],
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <main className='boards-container'>
          <LargeHeading text='GameChat Message Boards' />
          <BoardCreate boardSubmit={this.boardSubmit} />
          <section className='boards-table'>
            <div className='table-header'>
              <SubHeading text='Board' />
              <div className='board-info'>
                <SubHeading text='Topics' />
                <SubHeading text='Msgs' />
                <SubHeading text='Last Post' />
              </div>
            </div>
            {this.state.allBoards
              ? this.state.allBoards.map(board => (
                  <BoardRow key={board.id} board={board} />
                ))
              : 'Boards loading...'}
          </section>
        </main>
      </>
    );
  }
}

class BoardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicCount: null,
    };
  }

  componentDidMount() {
    fetch(`/api/topics/boards/${this.props.board.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          topicCount: data.data.topics.length,
        });
      });
  }

  render() {
    return (
      <div key={this.props.board.id} className='board-row'>
        <Link to={`/board/${this.props.board.id}`}>
          <GameHeading text={this.props.board.title} />
        </Link>
        <div className='board-row-info'>
          <p>{this.state.topicCount}</p>
          <p>530</p>
          <p>4 Minutes</p>
        </div>
      </div>
    );
  }
}
