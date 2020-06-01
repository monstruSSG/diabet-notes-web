import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

import Header from './AppBar/AppBar'
import Table from '../../common/Table'

let Dashboard = props => {
    let { classes } = props

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.subContent}>

                    <Table />

                </div>
            </div>
        </div>
    )
}

let styles = theme => ({
    container: {
        width: '100%',
        height: '100%'
    },
    header: {
        width: '100%',
        height: 65
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContent: {
        width: '90%',
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
    }
})

export default withStyles(styles)(Dashboard)