import React from 'react';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Alert = ({alert}) => {
    return (
        alert && (
            <div className="alert alert-light">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-1"/>
                {alert}
            </div>
        )
    );
};

Alert.propTypes = {
    alert: PropTypes.string.isRequired
}

export default Alert;
