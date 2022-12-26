import React from "react"
import { useDispatch } from "react-redux"
import LoadingBar, { showLoading } from 'react-redux-loading-bar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from "react-redux";
import { getLoadingBar, getStreamState } from "../../../state/contexts/stream/Selectors";
import { SetDashboardSection, SetMidPointStep } from "../../../state/contexts/app/Actions";
import { DashboardSection, MidPointStep } from "../../../enum/DashboardSection";
import { CreateHostRoomAction, GetHostRoomsAction, SetHostRoomAction } from "../../../state/contexts/stream/Actions";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { HostRoom } from "../../../graphql/types";

/* 
    Before the next screen appears we should load:
    1. All the software and brand images
    2. Create host room  

*/

export const StartStream = () => {

    const percentage = useSelector(getLoadingBar)
    const { userCreatedHostRooms } = useSelector(getStreamState)


    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(GetHostRoomsAction())

        // let timer = setTimeout(() => {
        //     dispatch(SetMidPointStep(MidPointStep.Welcome))
        // }, 2200)

  
        // return () => {
        //     clearTimeout(timer);
        //   };
    }, [])

    React.useEffect(() => {
       console.log(percentage)
    }, [percentage, userCreatedHostRooms])

    const set = (hostRoom: HostRoom) => {
        dispatch(SetHostRoomAction(hostRoom))
        dispatch(SetMidPointStep(MidPointStep.Welcome))
    }

    if (userCreatedHostRooms.length > 0) {
        const limit = 5;
        const maxReached = userCreatedHostRooms.length === limit

        return (
            <nav  style={{ width: 200 }}>
                <List>
                    {userCreatedHostRooms.map(room => 
                        <ListItem disablePadding key={room.id}>
                            <ListItemButton onClick={() => set(room)}>
                                <ListItemText primary={room.name} secondary={
                                    <span style={{  color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>
                                        {new Date(room.createdAt).toLocaleDateString("en-GB")}
                                    </span>
                                }/>
                            </ListItemButton>
                        </ListItem>
                    )}
                    <ListItem disablePadding>
                        <ListItemButton disabled={maxReached} onClick={() => !maxReached && dispatch(CreateHostRoomAction())}>
                            <ListItemText  primary={"Create New"} secondary={
                                <span 
                                    style={{ 
                                        color: maxReached ? 'rgb(196, 25, 25)' : 'rgba(255, 255, 255, 0.6)', 
                                        fontSize: 12  
                                    }}
                                >
                                    {maxReached ? "Max reached" : `${limit - userCreatedHostRooms.length} rooms remaining`}
                                </span>
                            } />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        )
    }

    return (
            <div
                style={{
                    margin: '0 auto',
                    width: 400,
                    marginTop: 140,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        position: 'relative'
                    }}
                >
                    <span style={{ fontSize: 40 }}>MidPoint.</span>
                    <span
                        style={{
                            marginTop: 5,
                            color: 'rgba(255, 255, 255, 0.6)',
                        }}
                    >
                        Please be patient
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', width: 400, margin: 20 }}>
                        <LoadingBar
                            updateTime={100}
                            maxProgress={100} 
                            // progressIncrease={100 / Object.keys(LoadStartup).length}
        
                            progressIncrease={100 / 2}
                            style={{
                                height: 2,
                                backgroundColor: "#19C45D"
                            }}
                        />
            
                    </div>
                    <div
                        onClick={() => dispatch(SetDashboardSection(DashboardSection.Overview))}
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <ArrowBackIcon />
                        <span style={{ marginLeft: 10 }}>Cancel</span>
                    </div>
                </div>
             </div>

    )

}