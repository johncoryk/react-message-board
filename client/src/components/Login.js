import React, { Component } from 'react'
import Button from '../components/utility/Button'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.clearPassword = this.clearPassword.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    clearPassword(e) {
        e.preventDefault()
        console.log('clearpassword', this.state);
        this.setState({
            username: '',
            password: '',
        });
    }
    render() {
        return (
            <div>
                <form className='clear-password' onSubmit={e => this.clearPassword(e)}>
                    <input type = 'text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                        
                    <input type ='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                        
                    <Button text='submit' color='default' />


                </form>


            </div>
        )
    }
}
