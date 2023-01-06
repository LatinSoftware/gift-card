import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

function AudioPlayer({url, state}) {
    const [playing, setPlaying] = React.useState(false);
    const body = document.querySelector('body');
    body.addEventListener("click", () => {
        if(state < 2 || playing) return;
        setPlaying(true);
      });
  return (
    <ReactPlayer
      url={url}
      controls={false}
      playing={playing}
      width="0"
      height="0"
    />
  );
}

export default AudioPlayer;