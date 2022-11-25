import { useEffect, useRef } from "react"
import { useVideoPlayer } from "./Hooks/useVideoPlayer";
const VideoPlayer = ({video, showGift, setShowGift, hasToShowGift = false}) => {

    const videoElement = useRef(null);
    const {
        playerState,
        handleOnTimeUpdate
    } = useVideoPlayer(videoElement);

    useEffect(() => {
        if (!showGift && hasToShowGift && playerState.progress >= 40)
            setShowGift(true);
    }, [playerState.progress])

    return (
        <video autoPlay={playerState.isPlaying}
            loop={playerState.loop}
            muted={playerState.isMuted}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
            className='video' >
            <source src={video} type='video/mp4' />
        </video>
    )

}

export { VideoPlayer }