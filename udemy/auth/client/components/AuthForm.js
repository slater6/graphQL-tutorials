import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  renderErrors() {
    return this.props.errors.map((error, index) => {
      return (
        <div key={index}>{error}</div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className="errors">
          {this.renderErrors()}
        </div>

        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Email"
              type="text"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
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
