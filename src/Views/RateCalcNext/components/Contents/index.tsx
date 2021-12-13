import { useState } from 'react';

import {
    Avatar,
    Switch,
    FormControlLabel,
    Divider,
    TextField,
    Button
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AddIcon from '@material-ui/icons/Add';

import AmountTextField from '../../../../components/AmountTextField'
import DatePicker from '../../../../components/DatePicker';
import MyTable from '../../../../components/MyTable';
import WarningLabel from '../../../../components/WarningLabel';
import GrayLabel from '../../../../components/GrayLabel';
import RequiredLabel from '../../../../components/RequiredLabel';

import { themeState } from '../../../../Atom/atoms';
import {useSetRecoilState, } from 'recoil';

import useStyles from './styles'

const Contents = () => {
    const classes = useStyles()

    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
    });

    const setThemeState = useSetRecoilState(themeState);

    const handleSwitchChange = (event: React.ChangeEvent<any>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(event.target.name);
        if (event.target.name === 'checkedA'){
            setThemeState(event.target.checked);
        }
        
    };
    
    return (
        <div className={classes.root}>
            <WarningLabel label='The traveler associated with this deal does not have a valid permanent address.' />

            <div style={{ width: "50%", display: 'float', float: 'left' }}>
                <Avatar style={{ backgroundColor: '#038387', width: '60px', height: '60px', marginRight: '10px', display: 'float', float: 'left' }}>A</Avatar>
                <p style={{ fontSize: '16px', margin: '0px' }}>Alta Bates Summit Medical ...</p>
                <p style={{ fontSize: '12px', margin: '0px', color: 'darkgray' }}>350 Hawthorne Avenue</p>
                <p style={{ fontSize: '12px', margin: '0px', color: 'darkgray' }}>Okland, CA 94609</p>
            </div>

            <div style={{ width: "50%", display: 'float', float: 'left' }}>
                <div style={{ width: "66%", display: 'float', float: 'left' }}>
                    <Avatar style={{ backgroundColor: '#E3008C', width: '60px', height: '60px', marginRight: '10px', display: 'float', float: 'left' }}>JS</Avatar>
                    <p style={{ fontSize: '16px' }}>jpop secrettest</p>
                </div>
                <div style={{ width: "34%", display: 'float', float: 'left' }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.checkedA}
                                onChange={handleSwitchChange}
                                name="checkedA"
                                color="primary"
                            />
                        }
                        label="Taxed"
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.checkedB}
                                onChange={handleSwitchChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Stipend Travel"
                    />
                </div>
            </div>

            <div style={{ width: '100%', display: 'float', float: 'left', border: '1px solid gray' }}>
                <GrayLabel label="Assignment Details" />
                <div style={{ width: 'calc(50% - 2px)', display: 'float', float: 'left', padding: '5px', boxSizing: 'border-box' }}>
                    <div className={classes.half}>
                        <RequiredLabel label='Start' mark='*' />
                        <DatePicker />
                        <RequiredLabel label='Assignment Length (weeks)' mark='*' />
                        <TextField label="" style={{ margin: '0px', width: '100%', fontSize: '12px' }} />
                    </div>

                    <div className={classes.half}>
                        <RequiredLabel label='End' mark='*' />
                        <DatePicker />
                        <RequiredLabel label='Work Week End Day (MedSol)' mark='*' />
                        <TextField label="" style={{ margin: '0px', width: '100%', fontSize: '12px' }} />
                    </div>
                </div>

                <Divider orientation='vertical' style={{ backgroundColor: 'lightgray', width: '2px', height: '105px', margin: '1px', display: 'float', float: 'left' }}></Divider>

                <div style={{ width: 'calc(50% - 2px)', display: 'float', float: 'left', padding: '5px', boxSizing: 'border-box' }}>
                    <div className={classes.half}>
                        <RequiredLabel label='Regular Hours' mark='*' />
                        <TextField label="" style={{ margin: '0px', width: '100%', fontSize: '12px' }} />
                        <RequiredLabel label='Call Hours' mark='' />
                        <TextField label="" style={{ margin: '0px', width: '100%', fontSize: '12px' }} />
                    </div>

                    <div className={classes.half}>
                        <RequiredLabel label='Overtime Hours' mark='' />
                        <TextField label="" style={{ margin: '0px', width: '100%', fontSize: '12px' }} />
                        <RequiredLabel label='Orientation Hours' mark='' />
                        <TextField label="" style={{ margin: '0px', width: '100%', fontSize: '12px' }} />
                    </div>
                </div>
            </div>

            <div style={{ width: 'calc(50% - 5px)', marginTop: '10px', display: 'float', float: 'left', border: '1px solid gray' }}>
                <GrayLabel label="Wages" />
                <div style={{ width: '100%', display: 'float', float: 'left', padding: '5px', boxSizing: 'border-box' }}>
                    <div className={classes.half}>
                        <RequiredLabel label='Regular (Minimum: $16.50)' mark='*' />
                        <AmountTextField />
                        <RequiredLabel label='Call' mark='*' />
                        <AmountTextField />
                    </div>

                    <div className={classes.half}>
                        <RequiredLabel label='Overtime (Minimum $24.75)' mark='' />
                        <AmountTextField />
                        <p style={{ margin: '0px', fontSize: '12px', color: 'gray' }}>
                            Charge
                            <InfoOutlinedIcon style={{ width: '15px', height: '15px', color: '#337DCF', marginLeft: '5px' }} />
                        </p>
                        <AmountTextField />
                    </div>
                </div>
            </div>

            <div style={{ width: 'calc(50% - 5px)', marginTop: '10px', display: 'float', float: 'right', border: '1px solid gray' }}>
                <GrayLabel label="Housing and Per Diem" />
                <div style={{ width: '100%', display: 'float', float: 'left', padding: '5px', boxSizing: 'border-box' }}>
                    <p style={{ margin: '0px', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                        Housing Type
                        <InfoOutlinedIcon style={{ width: '15px', height: '15px', color: '#337DCF', marginLeft: '5px' }} />
                    </p>
                    <Button variant="contained" color="primary" style={{ marginLeft: '5px' }}>
                        Stipend
                    </Button>
                    <Button variant="contained" style={{ marginLeft: '5px' }}>MS Provided</Button>
                    <Button variant="contained" style={{ marginLeft: '5px' }}>
                        Hospital Provided
                    </Button>
                </div>

                <div style={{ width: '100%', display: 'float', float: 'left', padding: '5px', boxSizing: 'border-box' }}>
                    <div className={classes.half}>
                        <RequiredLabel label='Regular (Minimum: $16.50)' mark='*' />
                        <AmountTextField />
                    </div>

                    <div className={classes.half}>
                        <RequiredLabel label='Overtime (Minimum $24.75)' mark='' />
                        <AmountTextField />
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', marginTop: '10px', display: 'float', float: 'left', border: '1px solid gray', }}>
                <AddIcon style={{ display: 'float', float: 'right', color: '337DCF', }} />
                <GrayLabel label="Additional Costs" />
                <MyTable />
            </div>
            
            <div style={{ width: '100%', display: 'float', float: 'left', marginTop: '10px', }}>
                <Button variant="contained" color="primary" style={{ display: 'float', float: 'left' }}>
                    Switch to PlayCalc
                </Button>
                <Button variant="contained" style={{ display: 'float', float: 'right' }}>
                    Submit
                </Button>
                <Button variant="contained" color="primary" style={{ marginRight: '5px', display: 'float', float: 'right' }}>
                    Save
                </Button>
            </div>
        </div >
    );
}

export default Contents;