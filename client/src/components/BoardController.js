import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import Board from './Board';
import MainPage from './MainPage';
import Board from './Board';
import Topic from './Topic';

import { boards, topics } from '../THROW_AWAY_DATA/data';

export default class BoardController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage,
      currentId: props.currentId || null,
      currentBoard: null,
      currentTopic: null,
      allBoards: boards,
      allTopics: topics,
      dataLoaded: false,
      fireRedirect: false,
      redirectPath: null,
    };

    this.decideWhichToRender = this.decideWhichToRender.bind(this);
    this.findBoardById = this.findBoardById.bind(this);
    this.postSubmit = this.postSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.currentPage === 'index') {
      this.setState({
        allBoards: boards,
        dataLoaded: true,
      });
    } else if (this.state.currentPage === 'show') {
      const foundBoard = this.findBoardById(this.state.currentId);
      this.setState({
        currentBoard: foundBoard,
        dataLoaded: true,
      });
    } else if (this.state.currentPage === 'topic') {
      const foundTopic = this.findTopicById(this.state.currentId);
      this.setState({
        currentTopic: foundTopic,
        dataLoaded: true,
      });
    } else if (this.state.currentPage === 'new') {
      const foundTopic = this.findTopicById(this.state.currentId);
      this.setState({
        currentTopic: foundTopic,
        dataLoaded: true,
      });
    }
  }

  postSubmit(method, event, data, id) {
    event.preventDefault();
    console.log(data);
    fetch(`/api/posts/${id || ''}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(err => console.log(err));
  }

  // Throw away func to find board/id
  findBoardById(id) {
    return this.state.allBoards.find(
      board => parseInt(board.id) === parseInt(id)
    );
  }

  findTopicById(id) {
    return this.state.allTopics.find(
      topic => parseInt(topic.id) === parseInt(id)
    );
  }

  decideWhichToRender() {
    switch (this.state.currentPage) {
      case 'index':
        return <MainPage allBoards={this.state.allBoards} />;
      case 'show':
        return <Board currentBoard={this.state.currentBoard} />;
      case 'topic':
        return (
          <Topic
            postSubmit={this.postSubmit}
            currentTopic={this.state.currentTopic}
          />
        );
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
