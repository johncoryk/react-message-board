import React, { Component } from 'react';

import LargeHeading from '../components/utility/LargeHeading';
import SubHeading from '../components/utility/SubHeading';
// import GameHeading from './utility/GameHeading';
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
          <div className='horizontal-rule'></div>
          {this.state.allBoards.map(board => (
            <SubHeading text={board.title} />
          ))}
        </main>
      </>
    );
  }
}
