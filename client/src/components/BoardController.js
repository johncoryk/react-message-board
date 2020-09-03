import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import Board from './Board';
import MainPage from './MainPage';
import Board from './Board';
import Topic from './Topic';

export default class BoardController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage,
      currentId: props.currentId || null,
      currentBoard: null,
      currentTopic: null,
      allBoards: null,
      allTopics: null,
      allPosts: null,
      dataLoaded: false,
      fireRedirect: false,
      redirectPath: null,
    };

    this.decideWhichToRender = this.decideWhichToRender.bind(this);
  }

  componentDidMount() {
    if (this.state.currentPage === 'index') {
      fetch('/api/boards')
        .then(res => res.json())
        .then(data => {
          this.setState({
            allBoards: data.data.boards,
            dataLoaded: true,
          });
        });
    } else if (this.state.currentPage === 'show') {
      fetch(`/api/boards/${this.state.currentId}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            currentBoard: data.data.board,
            dataLoaded: true,
          });
        });
    } else if (this.state.currentPage === 'topic') {
      fetch(`/api/posts/topics/${this.props.currentId}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            allPosts: data.posts,
          });
          fetch(`/api/topics/${this.props.currentId}`)
            .then(res => res.json())
            .then(data => {
              console.log('from controller topic', data);
              this.setState({
                currentTopic: data.data.topic,
                dataLoaded: true,
              });
            });
        });
    }
  }

  decideWhichToRender() {
    switch (this.state.currentPage) {
      case 'index':
        return <MainPage allBoards={this.state.allBoards} />;
      case 'show':
        return <Board currentBoard={this.state.currentBoard} />;
      case 'topic':
        return <Topic currentTopic={this.state.currentTopic} />;
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
