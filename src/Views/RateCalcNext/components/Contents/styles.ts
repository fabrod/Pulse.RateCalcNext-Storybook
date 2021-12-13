import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'float',
        flexDirection: 'column',
        width: 'calc(100%  - 300px)',
        padding: '10px',
        float: 'left',
        boxSizing: 'border-box',
    },
    half: {
        width: '50%',
        display: 'float',
        float: 'left',
        paddingRight: '5px',
        boxSizing: 'border-box'
    }
}))

export default useStyles