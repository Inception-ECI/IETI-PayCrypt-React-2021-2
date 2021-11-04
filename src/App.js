import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import {Accounts} from "./components/Accounts";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Password from './components/passwordrecovery/Password';
import Generate from './components/generatelink/Generate';
import Convert from './components/generatelink/Convert';


function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/accounts' component={Accounts}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/password' component={Password}/>
                    <Route path='/generate' component={Generate}/>
                    <Route path='/convert' component={Convert}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
