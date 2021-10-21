import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
            <Switch>
                {/* Esto debe cambiar cuando se agreguen las otras funcionalidades*/}
                <Route path='/' component={Navbar} />
                <Router path='/home' component={Navbar}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
