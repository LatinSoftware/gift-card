import { useEffect, useRef } from "react"
import { useVideoPlayer } from "./Hooks/useVideoPlayer";
const VideoPlayer = ({video, showGift, setShowGift, speed = 1 , hasToShowGift = false}) => {

    const videoElement = useRef(null);
    const {
        playerState,
        setPlayerState,
        handleOnTimeUpdate,
    } = useVideoPlayer(videoElement);

    useEffect(() => {
        if (!showGift && hasToShowGift && playerState.progress >= 40)
            setShowGift(true);
    }, [playerState.progress])

    useEffect(() => {
        setPlayerState({...playerState, speed})
    }, [speed])

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