import React, { useRef } from "react";
import "./VideoPlayer.css";
import college_video from "../../assets/college_video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  //   closing the video by clicking outside the window
  const closePlyer = (e) => {
    if (e.target == player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlyer}
    >
      <video src={college_video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;