import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import { fetchSong, likeLyric } from '../queries';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }
  renderLyrics() {
    return this.props.data.song.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={`lyric-${id}`}>
          {content}
          <i className="material-icons right" onClick={() => this.onLike(id, likes)}>
            thumb_up
          </i>
          {likes}
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

export default graphql(likeLyric)(graphql(fetchSong, options)(SongDetail));
