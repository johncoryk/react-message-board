import React, { Component } from 'react';

import LargeHeading from './utility/LargeHeading';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';
import Button from './utility/Button';
import PostForm from './PostForm';

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.currentTopic,
      posts: null,
    };

    this.postSubmit = this.postSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        this.setState({
          posts: data.data,
        });
      });
  }

  postSubmit(method, event, data, id) {
    event.preventDefault();
    console.log(data);
    fetch(`/api/posts/${id || ''}`, {
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
        <SubHeading text='Board' color='var(--alt-gray)' />
        <Button text='Post New Message' color='default' />

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
