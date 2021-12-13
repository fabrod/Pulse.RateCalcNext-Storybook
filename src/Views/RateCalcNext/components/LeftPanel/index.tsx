import {useRecoilState} from 'recoil';

import Divider from '@material-ui/core/Divider';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import logo from '../../../../logo.svg';
import { themeState } from '../../../../Atom/atoms';
import useStyles from './styles'

const LeftPanel = () => {

    const classes = useStyles()
    const [theme] = useRecoilState(themeState);

    return (
        <div className={classes.root}>
            <img src={logo} className={classes.avatar} alt="avatar" />
            <p className={classes.textwhite}>Deal Status:</p>
            <p className={classes.textwhite}>Submitted</p>
            <p className={classes.textgray}>Deal ID: 0639247</p>
            <p className={classes.textgray}>Created:</p>
            <p className={classes.textgray}>7/12/2021</p>

            <br />

            <p className={classes.textgray}>Career Consultant</p>
            <p className={classes.textwhite}>Pulse Career Consultant</p>
            <br />
            <p className={classes.textgray}>Client Manager</p>
            <p className={classes.textwhite}>Pulse Client Manager</p>

            <br />
            <Divider style={{ backgroundColor: 'gray' }} />
            <br />

            <p className={classes.textgray}>Job</p>
            <p className={classes.textwhite}>Medsurg Tele 8 hour eve</p>
            <p className={classes.textwhite}>needs in Bay Area of CA</p>

            <br />

            <p className={classes.textgray}>Unit</p>
            <p className={classes.textwhite}>Telemetry / Med / Tele 8</p>
            <p className={classes.textwhite}>hours shifts</p>

            <br />

            <p className={classes.textgray}>Shift</p>
            <p className={classes.textwhite}>Day, Evening</p>

            <br />
            <Divider style={{ backgroundColor: 'gray' }} />
            <br />

            <p className={classes.textgray}>Vendor</p>
            <p className={classes.textwhite}>-</p>

            <p className={classes.textgray}>Vendor Fee</p>
            <p className={classes.textgray}>Rebate</p>
            <p className={classes.textwhite}>0%</p>

            <p className={classes.textgray}>State Fee</p>
            <p className={classes.textwhite}>0%</p>

            <p className={classes.textgray}>Travelers at Hospital</p>
            <p className={classes.textwhite}>0</p>

            <br />

            <p className={theme? classes.textgreen : classes.textyellow}>
                Adjusted Bill Rates
                <InfoOutlinedIcon className={classes.icon} />
            </p>
            <br />
            {theme === true ?
                <Divider style={{ backgroundColor: '#6BA543' }} />
                :
                <Divider style={{ backgroundColor: '#CE8D23' }} />
            }

            <br />

            <p className={classes.textgray}>Regular</p>
            <p className={classes.textwhite}>$100.80</p>

            <br />

            <p className={classes.textgray}>Overtime</p>
            <p className={classes.textwhite}>$151.20</p>

            <br />

            <p className={classes.textgray}>Call</p>
            <p className={classes.textwhite}>$9.60</p>

            <br />

            <p className={classes.textgray}>Charge</p>
            <p className={classes.textwhite}>$0.00</p>
        </div>
    );
}

export default LeftPanel;