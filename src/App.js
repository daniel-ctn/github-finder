import './App.css';
import React, {} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

const App = () => {
    return (
        <div className="App">
            <Navbar title="Github Finder"/>
            <div className="container">
                <Users/>
            </div>
        </div>
    );
};

export default App;
