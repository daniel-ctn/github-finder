import React from 'react';
import spinner from './spinner.gif'

const Spinner = (props) => {
    return (
        <>
            <img src={spinner} alt="Loading..." style={{
                width: '100px',
                margin: 'auto',
                display: 'block'
            }}/>
        </>
    );
};

export default Spinner;
