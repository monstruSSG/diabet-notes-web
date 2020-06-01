import React, { useState, useEffect } from 'react'
import { TextField, withStyles, Button } from '@material-ui/core'

let FormGenerator = props => {
    let [fields, setFields ] = useState(props.fields)


    useEffect(() => {

    }, [props.fields])

    let onChange = (name, value) => {
        let newFields = [...fields]
        let index = newFields.findIndex(field => field.name === name)

        if(index < 0 ) return
        
        newFields[index].value = value

        setFields(newFields)
    }

    let onSubmit = () => {
        let data = {}

        fields.forEach(field => data[field.name] = field.value)

        return data
    }

    return (
        <div className={props.classes.container}>
            {fields.map((field, index) =>  <TextField
             key={index}
             label={field.label} 
             name={field.name}
             onChange={event => onChange(event.target.name, event.target.value)}
             value={field.value}
             className={props.classes.input} />)}
           
            <Button variant='contained' className={props.classes.button} onClick={onSubmit}>{props.submitText}</Button>
        </div>
    )
}

const styles = theme => ({
    container: {
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    input: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: 20
    }
})

export default withStyles(styles)(FormGenerator)