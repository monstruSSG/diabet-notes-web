import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login/Login'
import Dashboard from './Dashboard/Dasboard'
import * as USER from '../store/actions/user'

let Root = props => {
    useEffect(() => {
        let bootstrapAsync = async () => {
            let token = localStorage.getItem('token')

            if(!token) return props.signOut()
            return props.signIn(token)
        }

        bootstrapAsync()
    }, [props.user.userToken])

    return (
        <Router>
            <Switch>
                {props.user.userToken ? <Route path="/" exact component={Dashboard} /> : null}
                {props.user.userToken ? null : <Route path="/login" exact component={Login} />}
                {props.user.userToken ? <Redirect from="*" to='/' /> : <Redirect from="*" to='/login' />}
            </Switch>
        </Router>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    signIn: token => dispatch(USER.signIn(token)),
    signOut: () => dispatch(USER.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
