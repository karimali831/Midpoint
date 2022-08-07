import React, { RefObject } from 'react';

interface IOwnProps {
    ref: RefObject<HTMLVideoElement>
}

const VideoStream: React.FC<IOwnProps> = (props) => {



    return (
        <div>
            <h5>Video chat</h5>
            <div className="videoArea">
                <video id="localVideo" ref={props.ref} autoPlay={true} playsInline={true}></video>
                <video id="remoteVideo" autoPlay={true} playsInline={true}></video>
            </div>
        </div>
    )
}

export default VideoStream