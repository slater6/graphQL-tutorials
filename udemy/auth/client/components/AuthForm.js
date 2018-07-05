import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label htmlFor="">Email</label>
            <input
              type="text"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
