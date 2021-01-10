import React, {useState, useEffect} from 'react';
import UserItem from './UserItem';
import githubOAuthIns from '../../request/github-oauth';
import Spinner from '../layout/Spinner';

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(process.env)
        setLoading(true);
        githubOAuthIns.get().then(res => {
            setUsers(res.data);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
        });
    }, []);

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

export default Users;
