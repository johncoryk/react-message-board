import React, { Component } from 'react';

import Button from './utility/Button';

export default class BoardCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewBoard = this.addNewBoard.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addNewBoard(e) {
    console.log(this.state.title);
    this.props.boardSubmit('POST', e, this.state.title);
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <form className='post-form' onSubmit={e => this.addNewBoard(e)}>
        <input
          className='input-style'
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <Button text='Add Board' color='default' />
      </form>
    );
  }
}
