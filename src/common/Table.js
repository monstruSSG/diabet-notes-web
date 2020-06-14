import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                        <TableCell>Consultatie</TableCell>
                        <TableCell align="left">Nume</TableCell>
                        <TableCell align="left">Prenume</TableCell>
                        <TableCell align="left">Data debut</TableCell>
                        <TableCell align="left">Observatii</TableCell>
                        <TableCell align="left">Telefon</TableCell>
                        <TableCell align="left">Data programare</TableCell>
                        <TableCell align="left">Ultima glicemie</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows && props.rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                Y
                            </TableCell>
                            <TableCell align="left">{row.patient.firstName}</TableCell>
                            <TableCell align="left">{row.patient.lastName}</TableCell>
                            <TableCell align="left">10/22/2012</TableCell>
                            <TableCell align="left">Am facut hipo</TableCell>
                            <TableCell align="left">{row.patient.phoneNumber}</TableCell>
                            <TableCell align="left">12/12/2002</TableCell>
                            <TableCell align="left">202 mg/DLm</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}