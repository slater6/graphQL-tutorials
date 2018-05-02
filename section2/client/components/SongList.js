import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs, deleteSong } from '../queries';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li className="collection-item" key={`song-${id}`}>
          {title}
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

  handleDelete(id) {
    this.props
      .mutate({
        variables: { id }
      })
      .then(() => this.props.data.refetch());
  }

  render() {
    return (
      <div>
        <ul className="collection">
          {!this.props.data.loading && this.renderSongs()}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
