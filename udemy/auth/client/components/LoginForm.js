import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/login'
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo'

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: []
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(err => {
      const errors = err.graphQLErrors.map((e) => e.message)
      this.setState({
        errors
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm)
