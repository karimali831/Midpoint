import * as React from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ChatIcon from '@mui/icons-material/Chat'
import CssBaseline from '@mui/material/CssBaseline'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import IconButton from '@mui/material/IconButton'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import useStyles from './styles'
import { InstanceTimer } from '../InstanceTimer'
import { useSelector } from 'react-redux'
import { getStreamState } from '../../../state/contexts/stream/Selectors'
import { MainButton } from '../../Buttons/MainButton'
import { useDispatch } from 'react-redux'
import { SetMidPointStep } from '../../../state/contexts/app/Actions'
import { MidPointStep } from '../../../enum/DashboardSection'
import { motion } from 'framer-motion'

interface IOwnProps {
    closeConnection: () => void
}

const drawerWidth = 240
const miniDrawerWidth = 100

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
})

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}))

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}))

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}))

export const WebRTC = (props: IOwnProps) => {
    const { classes } = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(true)

    const handleDrawer = () => {
        setOpen(!open)
    }

    const dispatch = useDispatch()

    const { timeLiveStr } = useSelector(getStreamState)

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{
                x: window.innerWidth,
                transition: {
                    duration: 0.3
                }
            }}
        >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    open={open}
                    sx={{ bgcolor: '#121212' }}
                >
                    <Toolbar>
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawer}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                color: 'white',
                                ...(open && { display: 'none' })
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            WebRTC
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    open={open}
                    classes={{ paper: classes.paper }}
                    sx={{
                        '& .MuiPaper-root': {
                            width: open ? drawerWidth : miniDrawerWidth,
                            color: 'white'
                        }
                    }}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawer}>
                            {theme.direction === 'rtl' ? (
                                <ChevronRightIcon style={{ color: 'white' }} />
                            ) : (
                                <ChevronLeftIcon style={{ color: 'white' }} />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />

                    <div className="align-6 mt30">
                        <div>
                            <InstanceTimer isMini={!open} />
                            <hr className="b3" />
                            <div className="align-4">
                                {!open ? (
                                    <>
                                        <div className="align-2 mt15">
                                            <span className="ml10 fs14 mr20">
                                                {timeLiveStr}
                                            </span>
                                        </div>
                                        <div
                                            className="align-2 mt10 mb20"
                                            style={{ justifyContent: 'center' }}
                                        >
                                            <NotificationsOutlinedIcon />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="align-2 mt15">
                                            <AccessTimeOutlinedIcon />
                                            <span className="ml10 fs14 mr20">
                                                Time live: {timeLiveStr}
                                                {/* 46m 30s */}
                                            </span>
                                        </div>
                                        <div className="align-2 mt10 mb20">
                                            <NotificationsOutlinedIcon />
                                            <span className="ml10 fs14">
                                                Set an alarm
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <hr className="b3" />
                            {!open ? (
                                <>
                                    <ChatIcon
                                        style={{
                                            width: '100%',
                                            margin: '20px 0'
                                        }}
                                    />
                                    <MainButton
                                        text=""
                                        height={35}
                                        width={50}
                                        icon={<FullscreenExitIcon />}
                                        onClick={() =>
                                            dispatch(
                                                // SetDashboardSection(DashboardSection.Start)
                                                SetMidPointStep(
                                                    MidPointStep.Stream
                                                )
                                            )
                                        }
                                    />
                                </>
                            ) : (
                                <>
                                    <div className="align-1 mt30">
                                        <div className="align-2">
                                            <ChatIcon />
                                            <span className="ml10">Chat</span>
                                        </div>
                                        <ArrowDropDownIcon />
                                    </div>
                                    <div className="mt30 align-6">
                                        <MainButton
                                            text="Shrink"
                                            height={35}
                                            width={150}
                                            icon={<FullscreenExitIcon />}
                                            onClick={() =>
                                                dispatch(
                                                    // SetDashboardSection(DashboardSection.Start)
                                                    SetMidPointStep(
                                                        MidPointStep.Stream
                                                    )
                                                )
                                            }
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '5%',
                                right: 20
                            }}
                        >
                            <div
                                className="align-8 mb30 link"
                                onClick={handleDrawer}
                            >
                                {open ? (
                                    <KeyboardDoubleArrowLeftIcon />
                                ) : (
                                    <KeyboardDoubleArrowRightIcon />
                                )}
                            </div>
                            {open ? (
                                <MainButton
                                    danger={true}
                                    icon={<CloseIcon />}
                                    height={35}
                                    width={150}
                                    text="Close MidPoint"
                                    onClick={props.closeConnection}
                                />
                            ) : (
                                <MainButton
                                    danger={true}
                                    icon={<CloseIcon />}
                                    height={35}
                                    width={50}
                                    text=""
                                    onClick={props.closeConnection}
                                />
                            )}
                        </div>
                    </div>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        bgcolor: '#dbdbdb'
                    }}
                >
                    <DrawerHeader />
                    <div className="align-6">WebRTC</div>
                </Box>
            </Box>
        </motion.div>
    )
}
