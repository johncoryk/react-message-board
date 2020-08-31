import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from '../components/utility/LargeHeading';
import SubHeading from '../components/utility/SubHeading';
import GameHeading from './utility/GameHeading';
// import Button from '../components/utility/Button';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBoards: this.props.allBoards,
    };
  }

  render() {
    return (
      <>
        <main className='boards-container'>
          <LargeHeading text='GameChat Message Boards' />
          <section className='boards-table'>
            <div className='table-header'>
              <SubHeading text='Board' />
              <div className='board-info'>
                <SubHeading text='Topics' />
                <SubHeading text='Msgs' />
                <SubHeading text='Last Post' />
              </div>
            </div>
            {this.state.allBoards.map(board => (
              <div key={board.id} className='board-row'>
                <Link to={`/board/${board.id}`}>
                  <GameHeading text={board.title} />
                </Link>
                <div className='board-row-info'>
                  <p>{board.topics_count}</p>
                  <p>530</p>
                  <p>4 Minutes</p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </>
    );
  }
}
