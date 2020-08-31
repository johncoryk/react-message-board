import React, { Component } from 'react';

import LargeHeading from './utility/LargeHeading';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';
import Button from './utility/Button';

import { posts } from '../THROW_AWAY_DATA/data';

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.currentTopic,
    };
  }

  render() {
    return (
      <main>
        <LargeHeading text={this.state.topic.title} />
        <SubHeading text='Board' color='var(--alt-gray)' />
        <Button text='Post New Message' color='default' />
        <div className='topics-container'>
          {posts.map(post => (
            <div key={post.id} className='post-row'>
              <div className='post-header'>
                <GameHeading text={post.user} />
                <p>#1</p>
              </div>
              <div className='post-body'>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
