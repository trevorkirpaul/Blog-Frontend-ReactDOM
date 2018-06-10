import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
  }

  handleOnChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLoginUser() {
    const { email, password } = this.state;
    if (!email || !password) {
      return this.setState({ error: 'Please complete the form' });
    }
    this.setState({ error: null });
    return console.log({ email, password });
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <h2>Sign In</h2>
        {error && <p className="errorText">{error}</p>}
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleOnChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleOnChange}
          placeholder="password"
        />
        <button onClick={this.handleLoginUser}>Login</button>
      </div>
    );
  }
}

export default SignIn;
