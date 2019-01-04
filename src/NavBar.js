import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {

    static propTypes = {
        butt: PropTypes.array,
        desc: PropTypes.string,
        _whatPageClicked: PropTypes.func,
        _changeLanguage: PropTypes.func
    }

    render() {
    const buttons = this.props.lang.butt;
    const description = this.props.lang.desc;


        return (

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                   {buttons.map(key =>
                       <li className="nav-item"
                           key={key}
                           onClick={()=>this.props._whatPageClicked(key)}

                           >
                           <Link className="nav-link hoverable" to={(`/${key}#`)}>{key}</Link>
                       </li>
                   )}
                   <li className="nav-item" onClick={this.props._changeLanguage}>
                       <a className="nav-link hoverable">{description}</a>
                   </li>
                 </ul>
            </div>

        );
    }
}
