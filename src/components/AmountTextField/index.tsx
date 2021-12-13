import React from 'react';
import useStyles from './styles'
import { FormControl, InputAdornment, Input } from '@material-ui/core';

const AmountTextField = () => {
    const classes = useStyles()

    const [values, setValues] = React.useState({
        amount: '',
    });

    const handleChange = (prop: any) => (event:  React.ChangeEvent<any>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin}>
                <Input
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
        </div>
    );
}

export default AmountTextField;