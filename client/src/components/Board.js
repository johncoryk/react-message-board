import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from './utility/LargeHeading';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';
import TopicCreate from './TopicCreate';
import Button from './utility/Button';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.currentBoard,
      topics: null,
    };

    this.getTopics = this.getTopics.bind(this);
    this.topicSubmit = this.topicSubmit.bind(this);
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics() {
    fetch(`/api/topics/boards/${this.state.board.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          topics: data.data.topics,
        });
      });
  }

  topicSubmit(method, event, data) {
    event.preventDefault();
    console.log('submit', data);
    fetch(`/api/topics/new/${this.state.board.id}`, {
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
          topics: [...this.state.topics, data.data.topic],
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main className='boards-container'>
        <LargeHeading text={this.state.board.title} />
        <TopicCreate topicSubmit={this.topicSubmit} />
        <Link to='/'>
          <Button text='View All Boards' color='default' />
        </Link>
        <section className='boards-table'>
          <div className='table-header'>
            <SubHeading text='Topics' />
            <div className='board-info'>
              <SubHeading text='Msgs' />
              <SubHeading text='Last Post' />
            </div>
          </div>
          {this.state.topics
            ? this.state.topics.map(topic => {
                let random = Math.floor(Math.random() * 20 + 9);
                return (
                  <TopicRow key={topic.id} topic={topic} random={random} />
                );
              })
            : 'Topics loading...'}
        </section>
      </main>
    );
  }
}

class TopicRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postCount: null,
    };
  }

  componentDidMount() {
    fetch(`/api/posts/topics/${this.props.topic.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          postCount: data.data.posts.length,
        });
      });
  }

  render() {
    return (
      <div key={this.props.topic.id} className='board-row'>
        <Link to={`/topic/${this.props.topic.id}`}>
          <GameHeading text={this.props.topic.title} />
        </Link>
        <div className='board-row-info'>
          <p>{this.state.postCount}</p>
          <p>{this.props.random && this.props.random} Minutes</p>
        </div>
      </div>
    );
  }
}
