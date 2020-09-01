import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
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
      <div className='add'>
        <form
          // className={this.props.isAdd ? 'addform' : 'editform'}
          // onSubmit={
          //   this.props.isAdd
          //     ? e => this.props.iceCreamSubmit('POST', e, this.state)
          //     : e =>
          //         this.props.iceCreamSubmit(
          //           'PUT',
          //           e,
          //           this.state,
          //           this.props.icecream.id
          //         )
          // }
          onSubmit={() => {
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
      </div>
    );
  }
}
