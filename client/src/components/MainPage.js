import React, { Component } from 'react';

import LargeHeading from '../components/utility/LargeHeading';
import SubHeading from '../components/utility/SubHeading';
import GameHeading from './utility/GameHeading';
import Button from '../components/utility/Button';

// testing
import SearchGames from './SearchGames';

export default class MainPage extends Component {
  render() {
    return (
      <>
        <main>
          <LargeHeading text='This is a large heading to reuse over and over again.' />
          <SubHeading text='This is a smaller subheading to reuse as well!' />
          <GameHeading text='Nintendo Switch' />
          <Button color='red' text='Red Button' />
          <Button color='default' text='Default Button' />
          <SearchGames />
        </main>
      </>
    );
  }
}
