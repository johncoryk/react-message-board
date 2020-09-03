import React, { Component } from 'react';

export default class TopicCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewTopic = this.addNewTopic.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addNewTopic(e) {
    this.props.topicSubmit('POST', e, this.state.title);
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <form className='post-form' onSubmit={e => this.addNewPost(e)}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleInputChange}
        />

        <input type='submit' value='Submit' />
      </form>
    );
  }
}
