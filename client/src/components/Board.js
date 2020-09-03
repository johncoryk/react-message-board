import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from './utility/LargeHeading';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.currentBoard,
      topics: null,
    };

    this.getTopics = this.getTopics.bind(this);
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics() {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        console.log(data.data.topics);
        this.setState({
          topics: data.data.topics,
        });
      });
  }

  render() {
    return (
      <main className='boards-container'>
        <LargeHeading text={this.state.board.title} />
        <section className='boards-table'>
          <div className='table-header'>
            <SubHeading text='Topics' />
            <div className='board-info'>
              <SubHeading text='Msgs' />
              <SubHeading text='Last Post' />
            </div>
          </div>
          {this.state.topics
            ? this.state.topics.map(topic => (
                <div key={topic.id} className='board-row'>
                  <Link to={`/topic/1`}>
                    <GameHeading text={topic.title} />
                  </Link>
                  <div className='board-row-info'>
                    <p>{topic.topics_count}</p>
                    <p>530</p>
                    <p>4 Minutes</p>
                  </div>
                </div>
              ))
            : 'Topics loading...'}
        </section>
      </main>
    );
  }
}
