import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
    const [text, setText] = useState('');

    const onClearHandler = e => {
        setText('');
        props.clearUsers();
    };

    return (
        <div>
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                if (text) {
                    props.setAlert('');
                    props.onSearch(text);
                } else {
                    props.setAlert('Please enter something!');
                    props.onSearch(text);
                }
            }}>
                <input type="text" name="user" placeholder="Search users..." value={text}
                       onChange={e => setText(e.target.value)}/>
                <div className="grid-2">
                    <button className="btn btn-primary btn-block" type="submit">Search</button>
                    <button className="btn btn-light btn-block" onClick={onClearHandler}>Clear</button>
                </div>
            </form>
        </div>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
};

export default Search;
