import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import {Accounts} from "./components/Accounts";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Password from './components/passwordrecovery/Password';
import {PrivateRoute} from "./components/PrivateRoute";
import {ApiConnectionRequest} from "./components/ApiConnectionRequest";
import {Transactions} from "./components/Transactions";
import {Order} from "./components/Order";
import {CreatePaymentLink} from "./components/CreatePaymentLink";
import {PaymentLink} from "./components/PaymentLink";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <PrivateRoute
                        path="/home"
                        loggedIn={ApiConnectionRequest.getCookie("loginToken").length > 0}
                        component={Home}
                    />
                    <PrivateRoute
                        path="/accounts"
                        loggedIn={ApiConnectionRequest.getCookie("loginToken").length > 0}
                        component={Accounts}
                    />
                    <PrivateRoute
                        path="/transactions"
                        loggedIn={ApiConnectionRequest.getCookie("loginToken").length > 0}
                        component={Transactions}
                    />
                    <PrivateRoute
                        path="/order"
                        loggedIn={ApiConnectionRequest.getCookie("loginToken").length > 0}
                        component={Order}
                    />
                    <PrivateRoute
                        path="/generate-payment-link"
                        loggedIn={ApiConnectionRequest.getCookie("loginToken").length > 0}
                        component={CreatePaymentLink}
                    />
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/password' component={Password}/>
                    <Route path='/payment-link/**' component={PaymentLink}/>
                    <Route path='/' component={Login}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
