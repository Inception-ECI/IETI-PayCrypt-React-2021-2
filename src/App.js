import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Password from './components/passwordrecovery/Password';
import generatelink from './components/generatelink/generatelink';

function App() {
  return (
    <>
        <Router>
            <Switch>
                {/* Esto debe cambiar cuando se agreguen las otras funcionalidades*/}
                <Route path='/home' component={Home}/>
                {/* */}
                <Route path='/signup' component={Signup}/>
                {/* */}
                <Route path='/login' component={Login}/>
                {/* */}
                <Route path='/password' component={Password}/>
                {/* */}
                <Route path='/generate' component={generatelink}/>
                {/* Aca va el index*/}
                <Route path='/' />
            </Switch>
        </Router>
    </>
  );
}

export default App;
