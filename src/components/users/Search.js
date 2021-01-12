import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'

const Search = ({ setAlert}) => {
    const githubContext = useContext(GithubContext)
    const [text, setText] = useState('');

    const onClearHandler = e => {
        setText('');
        githubContext.clearUsers();
    };

    return (
        <div>
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                if (text) {
                    setAlert('');
                    githubContext.searchUsers(text);
                } else {
                    setAlert('Please enter something!');
                    githubContext.clearUsers()
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
    setAlert: PropTypes.func.isRequired,
};

export default Search;
