import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleInput(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{}]
      })
      .then(() => {
        hashHistory.push('/');
      });
  }

  render() {
    return (
      <div>
        <Link to="/">BACK</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="">Song Title:</label>
          <input
            type="text"
            onChange={this.handleInput.bind(this)}
            value={this.state.title}
          />
          <button className="waves-effect waves-light btn" type="submit">
            Create Song
          </button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
