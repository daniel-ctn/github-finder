import React, {useEffect, useState} from 'react';
import githubOAuthIns from '../../request/github-oauth';
import {Link} from 'react-router-dom';
import {faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const User = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const login = props.match.params.login;
        githubOAuthIns.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
            setUser(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [props.match.params.login]);

    return (
        <>
            <Link to="/" className="btn btn-light">Back to search</Link>
            Hireable:
            {user.hireable ? <FontAwesomeIcon icon={faCheck} className="text-success ml-1"/> :
                <FontAwesomeIcon icon={faTimesCircle} className="text-danger ml-1"/>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={user.avatar_url} alt="" className="round-img" style={{width: '150px'}}/>
                    <h1>{user.name}</h1>
                    <p>{user.location}</p>
                </div>
                <div>
                    {user.bio && (
                        <>
                            <h3>Bio</h3>
                            <p>{user.bio}</p>
                        </>
                    )}
                    <a href={user.html_url} className="btn btn-dark my-1" target="_blank" rel="noreferrer">Visit Github profile</a>
                    <ul>
                        <li>
                            {user.login && (
                                <>
                                    <strong>Username: </strong> {user.login}
                                </>
                            )}
                        </li>
                        <li>
                            {user.company && (
                                <>
                                    <strong>Company: </strong> {user.company}
                                </>
                            )}
                        </li>
                        <li>
                            {user.blog && (
                                <>
                                    <strong>Website: </strong> {user.blog}
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {user.followers}</div>
                <div className="badge badge-success">Following: {user.following}</div>
                <div className="badge badge-danger">Public Repos: {user.public_repos}</div>
                <div className="badge badge-dark">Public Gists: {user.public_gists}</div>
            </div>
        </>
    );
};

export default User;
