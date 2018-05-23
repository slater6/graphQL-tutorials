import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import { fetchSong } from '../queries';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  renderLyrics() {
    return this.props.data.song.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={`lyric-${id}`}>
          {content}
          <i
            className="material-icons right"
            onClick={() => this.handleDelete(id)}
          >
            delete
          </i>
        </li>
      );
    });
  }
  render() {
    const { song, addLyricToSong } = this.props.data;
    if (!song && !addLyricToSong) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">BACK</Link>
        <h3>Song Detail : {song.title}</h3>
        <ul className="collection">{this.renderLyrics()}</ul>
        <LyricCreate songId={song.id} />
      </div>
    );
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
