import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login"
import { SignUp } from './SignUp'


export const Public = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Login} />
                <Route path="/sign-up" component={SignUp} />
            </Switch>
        </Router>
    );
};