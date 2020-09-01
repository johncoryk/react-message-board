import React, { Component } from 'react';

import LargeHeading from './utility/LargeHeading';
import SubHeading from './utility/SubHeading';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.currentTopic,
      text: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <LargeHeading text={this.state.topic.title} />
        <SubHeading text='Board' color='var(--alt-gray)' />
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(this.state.text);
          }}
        >
          <textarea
            name='text'
            cols='30'
            rows='10'
            value={this.state.text}
            onChange={this.handleInputChange}
          ></textarea>

          <input type='submit' value='Submit' />
        </form>
      </main>
    );
  }
}
