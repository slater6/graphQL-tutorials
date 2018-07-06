import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

export class Dashboard extends Component {
  componentWillMount() {
    if (!this.props.data.loading && !this.props.data.user) {
      hashHistory.push('/login');
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.data.user && !nextProps.data.user) {
      hashHistory.push('/login');
    }
  }

  render() {
    return <div>Dashboard</div>;
  }
}

export default graphql(query)(Dashboard);
