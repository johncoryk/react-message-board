import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from './utility/LargeHeading';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';
import Button from './utility/Button';

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.currentTopic,
      posts: null,
    };
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

  render() {
    return (
      <main>
        <LargeHeading text={this.state.topic.title} />
        <SubHeading text='Board' color='var(--alt-gray)' />
        <Link to={`/topic/${this.state.topic.id}/new`}>
          <Button text='Post New Message' color='default' />
        </Link>
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
      </main>
    );
  }
}
