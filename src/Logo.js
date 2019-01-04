import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Logo extends Component {

    static propTypes = {
        siteName: PropTypes.string
    }

    render() {
        return (
            <a className="navbar-brand " href="#">{this.props.siteName.toUpperCase()}</a>
        );
    }
}

