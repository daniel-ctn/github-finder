import './App.css';
import React, {useState} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => {
    const [searchUser, setSearchUser] = useState('');
    const [alert, setAlert] = useState('');

    const onSearch = (value) => {
        setSearchUser(value);
    };

    const onClear = () => {
        setSearchUser('');
    };

    const onAlert = msg => {
        setAlert(msg);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar title="Github Finder"/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() =>
                            (
                                <>
                                    {alert && <Alert alert={alert}/>}
                                    <Search onSearch={onSearch} clearUsers={onClear} setAlert={onAlert}/>
                                    <Users searchUser={searchUser}/>
                                </>
                            )
                        }/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/user/:login" render={props =>
                            <User {...props}/>
                        }/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
