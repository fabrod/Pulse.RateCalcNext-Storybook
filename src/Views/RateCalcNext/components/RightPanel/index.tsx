import {useRecoilState} from 'recoil';

import Divider from '@material-ui/core/Divider';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import TextBlock from '../../../../components/TextBlock'
import { themeState } from '../../../../Atom/atoms';
import useStyles from './styles'

const RightPanel = () => {

    const classes = useStyles()
    const [theme] = useRecoilState(themeState);

    return (
        <div className={classes.root}>
            <p className={theme? classes.textgreen : classes.textyellow}>
                Pay To Traveler
                <InfoOutlinedIcon className={classes.icon} />
            </p>
            <br />

            <Divider className={theme? classes.green : classes.yellow} />
            <br />

            <TextBlock type = 'white' title='Gross Pay / week' unit='$' value1='2347' value2='.00' description='' />
            <br />

            <TextBlock type = 'white' title='Take Home Pay / week' unit='$' value1='1538' value2='.46' description='Gross pay and take home pay are inclusive of wages and tax free reimbursements.' />
            <br />

            <p className={classes.textwhite}>Optimize Traveler Pay</p>
            <p className={classes.textwhite}>View Pay Summary</p>
            <p className={classes.textwhite}>Cost Proposal</p>
            <br />

            <p className={theme? classes.textgreen : classes.textyellow}>Costs & Revenue</p>
            <br />

            <Divider className={theme? classes.green : classes.yellow} />
            <br />

            <TextBlock title='Gross Profit Margin' value1='28.08%' description='$28.30 per hour' />
            <br />

            <p className={classes.textwhite}>Optimize Profitability</p>
            <p className={classes.textwhite}>View Cost Breakdown</p>
            <br />

            <p className={classes.textgray}>Total Revenue</p>
            <p className={classes.textwhite}>$52416.00</p>
            <br />

            <p className={classes.textgray}>Total Costs</p>
            <p className={classes.textwhite}>$37698.38</p>
            <br />

            <p className={classes.textgray}>Profit</p>
            <p className={classes.textwhite}>$14717.62</p>
            <br />
        </div>
    );
}

export default RightPanel;