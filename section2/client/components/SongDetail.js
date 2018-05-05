import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { fetchSong } from '../queries';

class SongDetail extends Component {
  render() {
    console.log(this.props);
    const { title } = this.props.data.song;
    return <h3>Song Detail : {title}</h3>;
  }
}

const options = {
  options: props => {
    return {
      variables: {
        id: props.params.id
      }
    };
  }
};

export default graphql(fetchSong, options)(SongDetail);
