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
                <Route path='/home' component={Navbar}/>
                {/* Aca va el index*/}
                <Route path='/' />
            </Switch>
        </Router>
    </>
  );
}

export default App;
