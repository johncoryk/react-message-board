import React, { Component } from 'react';

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
