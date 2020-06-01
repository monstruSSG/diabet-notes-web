import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

import Form from '../../common/FormGenerator'

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
                                {name: 'email', label: 'Email'},
                                {name: 'password', label: 'Password'}
                            ]}
                            submitText={'Login'}
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

export default withStyles(styles)(Login)