import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {

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
                           <Link className="nav-link hoverable" to={(`/${key}`)}>{key}</Link>
                       </li>
                   )}
                   <li className="nav-item" onClick={this.props._changeLanguage}>
                       <a className="nav-link hoverable" href="/">{description}</a>
                   </li>
                 </ul>
            </div>

        );
    }
}

export default NavBar;
