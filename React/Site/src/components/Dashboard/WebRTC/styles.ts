import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Theme) => {
    return {
        root: {
            // width: 250
            color: 'white'
        },
        paper: {
            background: '#121212'
        }
    };
});

export default useStyles;
