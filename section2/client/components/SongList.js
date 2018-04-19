import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li className="collection-item" key={`song-${song.id}`}>
          {song.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {!this.props.data.loading && this.renderSongs()}
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
