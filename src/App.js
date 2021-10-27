import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import { Accounts } from "./components/Accounts";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    {/* Esto debe cambiar cuando se agreguen las otras funcionalidades*/}
                    <Route path='/home' component={Home} />
                    <Route path='/accounts' component={Accounts} />
                    {/* Aca va el index*/}
                    <Route path='/' />
                </Switch>
            </Router>
        </>
    );
}

export default App;
