import { useEffect, useRef } from 'react'

const VideoStream = () => {
    let localVideoRef = useRef<HTMLVideoElement>(null)
    let removeVideoRef = useRef<HTMLVideoElement>(null)

    // let localStream = null

    useEffect(() => {
        grabWebCamVideo()
    }, [])

    const grabWebCamVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: true
            })
            .then(gotStream)
            .catch((err) => {
                console.error('error:', err)
            })
    }

    const gotStream = (stream: MediaStream) => {
        console.log('getUserMedia video stream URL:', stream)
        // localStream = stream
        // peerConn.addStream(localStream);

        let video = localVideoRef.current
        if (video) {
            video.srcObject = stream
            video.play()
        }
    }

    return (
        <>
            <div className="video">
                <video
                    id="localVideo"
                    ref={localVideoRef}
                    autoPlay={true}
                    playsInline={true}
                ></video>
                <video
                    id="remoteVideo"
                    ref={removeVideoRef}
                    autoPlay={true}
                    playsInline={true}
                ></video>
            </div>
        </>
    )
}

export default VideoStream
