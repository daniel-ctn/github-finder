import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import githubReducer from './githubReducer'
import githubOAuthIns from '../../request/github-oauth'
import { CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = (text) => {
    setLoading()
    githubOAuthIns.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
      dispatch({type: SEARCH_USERS, payload: res.data.items})
    }).catch(err => {
      console.log(err)
    });
  }

  const getUser = (login) => {
    githubOAuthIns.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
      dispatch({type: GET_USER, payload: res.data})
    }).catch(err => {
      console.log(err);
    });
  }

  const clearUsers = () => {
    dispatch({type: CLEAR_USERS})
  }

  const setLoading = () => {
    dispatch({type: SET_LOADING})
  }

  return <GithubContext.Provider value={{
    users: state.users,
    user: state.user,
    loading: state.loading,
    searchUsers,
    getUser,
    clearUsers
  }}>
    {props.children}
  </GithubContext.Provider>
}

export default GithubState