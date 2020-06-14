import React from 'react'
import { withStyles } from '@material-ui/core'

import Header from './AppBar/AppBar'
import Table from '../../common/Table'
import * as USER_REQUESTS from '../../requests/user'

let Dashboard = props => {
    let { classes } = props
    let [me, setMe] = React.useState({})

    React.useEffect(() => {
        USER_REQUESTS.getMe().then(result => {
            console.log(result)
            setMe(result)
        })
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.subContent}>

                    <Table 
                        rows={me.appointments || []}
                    />

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