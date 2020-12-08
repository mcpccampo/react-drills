import React, { Component } from 'react';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogin(event) {
    alert(`Welcome ${this.state.userName} Password... ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input placeholder="UserName" onChange={this.handleChange} name="userName"></input>
        <span>:</span>
        <input
          placeholder="password"
          onChange={this.handleChange}
          name="password"
          type="password"
        ></input>
        <span>:</span>
        <button onClick={this.handleLogin}> Login </button>
      </div>
    );
  }
}

export default Auth;
