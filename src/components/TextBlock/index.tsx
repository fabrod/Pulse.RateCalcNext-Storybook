import {useRecoilState} from 'recoil';

import Typography from '@material-ui/core/Typography';

import { themeState } from '../../Atom/atoms';

import useStyles from './styles';

const TextBlock = (props: any) => {
    
    const classes = useStyles()
    const [theme] = useRecoilState(themeState);

    return (
        <div>
            {props.type === 'white' ?
                <Typography component="div" className={classes.white} >
                    <p className={classes.title}>{props.title}</p>
                    <p className={classes.value}>
                        <sup className={classes.sup}>{props.unit}</sup>
                        {props.value1}
                        <sup className={classes.sup}>{props.value2}</sup>
                    </p>
                    {props.description !== '' ?
                        <p className={classes.description}>
                            {props.description}
                        </p>
                        :
                        ''
                    }
                </Typography>
                :
                <Typography component="div" className={theme ? classes.green : classes.yellow} >
                    <p className={classes.whitetitle}>Gross Profit Margin</p>
                    <p className={classes.whitevalue}>28.08%</p>
                    <p className={classes.whitedescription}>$28.30 per hour</p>
                </Typography>
            }
        </ div>
    );
}

export default TextBlock;