import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

class Header extends Component {
    render() {
        return (

            <nav className="navbar text-lg-right navbar-expand-xl navbar-dark bg-dark">
                <Logo
                    siteName={this.props.siteName}
                />
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavBar
                    key={this.props.key}
                    lang={this.props.lang}
                    goToSite={this.props.goToSite}
                    _whatPageClicked={this.props._whatPageClicked}
                    _changeLanguage={this.props._changeLanguage}
                />
            </nav>

        );
    }
}

export default Header;


