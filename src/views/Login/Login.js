import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

import Form from '../../common/FormGenerator'
import * as USER_REQUESTS from '../../requests/user'
import * as USER from '../../store/actions/user'

let Login = props => {
    let { classes } = props

    return (
        <div className={classes.container}>
            <div className={classes.loginContainer}>
                <div className={classes.title}>
                    <Typography variant="h1">{`Diabet\nNotes`}</Typography>
                </div>
                <div className={classes.form}>
                    <div className={classes.formContainer}>
                        <Form
                            fields={[
                                { name: 'email', label: 'Email' },
                                { name: 'password', label: 'Password' }
                            ]}
                            submitText={'Login'}
                            onSubmit={async data => {

                                let result = await USER_REQUESTS.login(data.email, data.password)

                                localStorage.setItem('token', result.token)

                                props.signIn(result.token)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = theme => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        width: '80%',
        height: '70%',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303f9f',
        borderRadius: 5,
        flexDirection: 'row'
    },
    title: {
        width: '30%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    form: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    formContainer: {
        width: '80%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'white'
    }
})

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    signIn: token => dispatch(USER.signIn(token))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Login));