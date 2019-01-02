import React, { Component } from 'react';

class Logo extends Component {

    render() {
        return (
            <a className="navbar-brand " href="#">{this.props.siteName.toUpperCase()}</a>
        );
    }
}

export default Logo;

