import React from "react";
import AudioPlayer from "react-audio-player";

function AudioPlayerButton() {
  const audioPlayer = React.useRef();

  return (
    <div>
      <AudioPlayer
        src="https://vgmsite.com/soundtracks/pokemon-heartgold-and-soulsilver/qpgcaxnrmz/002%20Title%20Screen.mp3"
        controls
        ref={audioPlayer}
        autoPlay
      />
      <button onClick={() => audioPlayer.current.audioEl.play()}></button>
    </div>
  );
}

export default AudioPlayerButton;
