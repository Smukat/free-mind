import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = ()=> {
    return (
        <nav className="navbar-style">
            <p>freeMind</p>
            <button className="addButton">+</button>
            <FontAwesomeIcon icon="faStroopwafel" />
        </nav>
    );
}

export default Navbar;
