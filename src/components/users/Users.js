import React, {useState, useEffect} from 'react';
import UserItem from './UserItem';
import githubOAuthIns from '../../request/github-oauth';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({searchUser}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (!searchUser) {
            setUsers([]);
            setLoading(false);
        } else {
            githubOAuthIns.get(`https://api.github.com/search/users?q=${searchUser}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
                setUsers(res.data.items);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
            });
        }
    }, [searchUser]);

    if (loading) {
        return <Spinner/>;
    } else {
        return (
            <div className="grid-3">
                {users.map(user =>
                    <UserItem user={user} key={user.id}/>,
                )}
            </div>
        );
    }
};

Users.propTypes = {
    searchUser: PropTypes.string.isRequired,
};

export default Users;
