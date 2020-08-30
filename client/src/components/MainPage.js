import React, { Component } from 'react';

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
        <main>
          <LargeHeading text='Boards' />
          <section className='boards-table'>
            <div className='table-header'>
              <SubHeading text='Board' />
              <div className='board-info'>
                <SubHeading text='Topics' />
                <SubHeading text='Msgs' />
                <SubHeading text='Last Post' />
              </div>
              {this.state.allBoards.map(board => (
                <>
                  <div className='board-row'>
                    <GameHeading text={board.title} />
                    <div className='board-row-info'>
                      <p>{board.topics_count}</p>
                      <p>530</p>
                      <p>4 Minutes</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </section>
        </main>
      </>
    );
  }
}
