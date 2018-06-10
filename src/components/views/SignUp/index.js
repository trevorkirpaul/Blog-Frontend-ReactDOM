import React, { Component } from 'react';
import Button from 'components/shared/Button';
import TextField from 'components/shared/TextField';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
  }

  handleOnChange(e) {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  }

  handleCreateUser() {
    const { email, password, confirmPassword } = this.state;
    if (!email || !password) {
      return this.setState({ error: 'Please complete the form' });
    }
    if (password !== confirmPassword) {
      return this.setState({ error: "Passwords don't match" });
    }
    this.setState({ error: null });
    return console.log({ email, password });
  }

  render() {
    const { email, password, confirmPassword, error } = this.state;
    return (
      <div>
        <h2>Sign Up</h2>
        {error && <p className="errorText">{error}</p>}
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={this.handleOnChange}
          placeholder="email"
          error={!email && this.state.error}
        />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={this.handleOnChange}
          placeholder="password"
          error={error}
        />
        <TextField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleOnChange}
          placeholder="confirm password"
          error={this.state.error}
        />
        <div>
          <Button label="Create" onClick={this.handleCreateUser} />
        </div>
      </div>
    );
  }
}

export default SignUp;
