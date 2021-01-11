import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({title='Github Finder'}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <FontAwesomeIcon icon={faSearch} className="mr-1"/>
                {title}
            </h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
