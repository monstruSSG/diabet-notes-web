import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable(props) {
    const classes = useStyles();

    React.useEffect(() => {
    }, [props.rows])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Confirmata</TableCell>
                        <TableCell align="left">Username</TableCell>
                        <TableCell align="left">Nume</TableCell>
                        <TableCell align="left">Prenume</TableCell>
                        <TableCell align="left">Telefon</TableCell>
                        <TableCell align="left">Data programare</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows && props.rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                <Checkbox
                                    checked={row.accepted}
                                    onChange={() => props.onElementCheck(row._id, !row.accepted)}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </TableCell>

                            <TableCell align="left">{row.patient.username}</TableCell>
                            <TableCell align="left">{row.patient.firstName}</TableCell>
                            <TableCell align="left">{row.patient.lastName}</TableCell>
                            <TableCell align="left">{row.patient.phoneNumber}</TableCell>
                            <TableCell align="left">
                                <TextField
                                    id="date"
                                    label="Appintment date"
                                    type="date"
                                    defaultValue={row.date || null}
                                    onChange={event => props.onDateChanged(row._id, event.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}