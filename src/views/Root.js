import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login/Login'
import Dashboard from './Dashboard/Dasboard'

let Root = props => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
                <Redirect from="*" to={Dashboard} />
            </Switch>
        </Router>
    )
}

export default Root