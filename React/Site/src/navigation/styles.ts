import { alpha, Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()((theme: Theme) => {
    return {
        grow: {
            flexGrow: 0,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            // display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
            position: 'absolute',
            right: 25,
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
            position: 'absolute',
            right: 25,
        },
        arrow: {
            "&:before": {
                border: "1px solid grey"
            },
            color: '#121212'
        },
        tooltip: {
            backgroundColor: '#121212',
            border: "1px solid grey"
        }
    }
})

export default useStyles;
