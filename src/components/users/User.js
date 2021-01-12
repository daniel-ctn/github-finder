import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom';
import {faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import GithubContext from '../../context/github/githubContext'

const User = (props) => {
    const githubContext = useContext(GithubContext)

    useEffect(() => {
        const login = props.match.params.login;
        githubContext.getUser(login)
    }, [props.match.params.login]);

    return (
        <>
            <Link to="/" className="btn btn-light">Back to search</Link>
            Hireable:
            {githubContext.user.hireable ? <FontAwesomeIcon icon={faCheck} className="text-success ml-1"/> :
                <FontAwesomeIcon icon={faTimesCircle} className="text-danger ml-1"/>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={githubContext.user.avatar_url} alt="" className="round-img" style={{width: '150px'}}/>
                    <h1>{githubContext.user.name}</h1>
                    <p>{githubContext.user.location}</p>
                </div>
                <div>
                    {githubContext.user.bio && (
                        <>
                            <h3>Biography</h3>
                            <p>{githubContext.user.bio}</p>
                        </>
                    )}
                    <a href={githubContext.user.html_url} className="btn btn-dark my-1" target="_blank" rel="noreferrer">Visit Github profile</a>
                    <ul>
                        <li>
                            {githubContext.user.login && (
                                <>
                                    <strong>Username: </strong> {githubContext.user.login}
                                </>
                            )}
                        </li>
                        <li>
                            {githubContext.user.company && (
                                <>
                                    <strong>Company: </strong> {githubContext.user.company}
                                </>
                            )}
                        </li>
                        <li>
                            {githubContext.user.blog && (
                                <>
                                    <strong>Website: </strong> {githubContext.user.blog}
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {githubContext.user.followers}</div>
                <div className="badge badge-success">Following: {githubContext.user.following}</div>
                <div className="badge badge-danger">Public Repos: {githubContext.user.public_repos}</div>
                <div className="badge badge-dark">Public Gists: {githubContext.user.public_gists}</div>
            </div>
        </>
    );
};

export default User;
