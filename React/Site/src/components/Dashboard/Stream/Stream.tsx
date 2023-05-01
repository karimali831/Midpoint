import React, { useEffect, useRef } from 'react';

interface IOwnProps {
    // localVideoRef: RefObject<HTMLVideoElement>
    // removeVideoRef: RefObject<HTMLVideoElement>
}

const VideoStream: React.FC<IOwnProps> = (props) => {

    let localVideoRef = useRef<HTMLVideoElement>(null)
    let removeVideoRef = useRef<HTMLVideoElement>(null)

    let localStream = null

    useEffect(() => {
        grabWebCamVideo()

        return () => {

        }
    }, [])

    const grabWebCamVideo = () => {
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
            .then(gotStream)
            .catch(err => {
                console.error("error:", err)
            })
    }

    const gotStream = (stream: MediaStream) => {
        console.log('getUserMedia video stream URL:', stream);
        localStream = stream;
        // peerConn.addStream(localStream);

        let video = localVideoRef.current
        if (video) {
            video.srcObject = stream
            video.play();
        }
    }

    return (
        <>
            <div className="videoArea" style={{ height: 250 }}>
                <video id="localVideo" ref={localVideoRef} autoPlay={true} playsInline={true}  style={{ width: '100%', height: 250 }}></video>
                <video id="remoteVideo" ref={removeVideoRef} autoPlay={true} playsInline={true}  style={{ width: '100%', height: 250  }}></video>
            </div>
        </>
    )
}

export default VideoStream