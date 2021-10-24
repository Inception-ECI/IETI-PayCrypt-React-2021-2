import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <>
        <Router>
            <Switch>
                {/* Esto debe cambiar cuando se agreguen las otras funcionalidades*/}
                <Route path='/home' component={Home}/>
                {/* Aca va el index*/}
                <Route path='/' />
            </Switch>
        </Router>
    </>
  );
}

export default App;
