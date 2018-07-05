import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/logout';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    if (this.props.data.loading) {
      return <div />;
    }

    if (this.props.data.user) {
      return (
        <div>
          <li>
            <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <Link to="/" className=" ">
                Home
              </Link>
            </li>
          </ul>

          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
