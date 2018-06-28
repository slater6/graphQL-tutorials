import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addLyric, fetchSong } from '../queries';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { songId: props.songId, content: '' };
  }

  handleInput(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          songId: this.state.songId,
          content: this.state.content
        }
      })
      .then(() => {
        this.setState({
          content: ''
        });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="">Add A Lyric</label>
        <input
          type="text"
          onChange={this.handleInput.bind(this)}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default graphql(addLyric)(LyricCreate);
