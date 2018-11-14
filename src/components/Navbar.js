import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'

const Navbar = ()=> {
    return (
        <nav className="navbar-style">
            <p>freeMind</p>
            <button className="addButton">+</button>
            <FontAwesomeIcon icon={faCoffee} />
        </nav>
    );
}

export default Navbar;
