import React, { Component } from 'react';

import Button from './utility/Button';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.topic,
      text: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addNewPost(e) {
    console.log('postform', this.state.text);
    this.props.postSubmit('POST', e, this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <form className='post-message-form' onSubmit={e => this.addNewPost(e)}>
        <textarea
          name='text'
          cols='50'
          rows='10'
          value={this.state.text}
          onChange={this.handleInputChange}
        ></textarea>

        <Button text='Post New Message' color='default' />
      </form>
    );
  }
}
