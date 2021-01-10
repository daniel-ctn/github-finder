import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Navbar = ({title='Github Finder'}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <FontAwesomeIcon icon={faSearch} className="mr-1"/>
                {title}
            </h1>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
