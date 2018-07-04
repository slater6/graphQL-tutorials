import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser'

class Header extends Component {
    renderButtons() {
        if (this.props.data.loading) {
            return <div />
        }

        if (this.props.data.user) {
            return <div>Logout</div>
        } else {
            return (
                <div>Sign In</div>
            )
        }
    }
    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    {this.renderButtons()}
                </div>
            </nav>
        )
    }
}

export default graphql(query)(Header);