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
            setMe(result)
        })
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header
                    count={me.appointments ? me.appointments.length : 0}
                />
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.subContent}>

                    <Table
                        rows={me.appointments || []}
                        onElementCheck={async (id, value) => {
                            await USER_REQUESTS.updateAppointment(id, value)

                            let result = await USER_REQUESTS.getMe()
                            setMe(result)
                        }}
                        onDateChanged={async (id, value) => {
                            await USER_REQUESTS.updateAppointment(id, null, value)

                            let result = await USER_REQUESTS.getMe()
                            setMe(result)
                        }}
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