import React, { Component } from 'react';

import LargeHeading from './utility/LargeHeading';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';
import PostForm from './PostForm';

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.currentTopic,
      posts: null,
      board: null,
    };

    this.postSubmit = this.postSubmit.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
    fetch(`/api/boards/${this.props.currentTopic.board_id}`)
      .then(res => res.json())
      .then(data => {
        console.log('props topic', this.props.currentTopic);
        console.log('board from topic', data);
        this.setState({
          board: data.data.board,
        });
      });
  }

  getPosts() {
    fetch(`/api/posts/topics/${this.state.topic.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data.data.posts,
        });
      });
  }

  postSubmit(method, event, data) {
    event.preventDefault();
    console.log(data);
    fetch(`/api/posts/new/${this.state.topic.id}`, {
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
          posts: [...this.state.posts, data.data.post],
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main>
        <LargeHeading text={this.state.topic.title} />
        <SubHeading
          text={this.state.board && this.state.board.title}
          color='var(--alt-gray)'
        />

        <div className='topics-container'>
          {this.state.posts
            ? this.state.posts.map((post, i) => (
                <div key={post.id} className='post-row'>
                  <div className='post-header'>
                    <GameHeading text={post.user} />
                    <p>#{i + 1}</p>
                  </div>
                  <div className='post-body'>
                    <p>{post.text}</p>
                  </div>
                </div>
              ))
            : 'Loading posts...'}
        </div>
        <PostForm topic={this.state.topic} postSubmit={this.postSubmit} />
      </main>
    );
  }
}
