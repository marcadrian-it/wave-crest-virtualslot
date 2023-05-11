import React from "react";

interface AudioPlayerProps {
  isWinner: boolean | null;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isWinner }) => {
  return (
    <>
      {isWinner !== null && (
        <audio
          style={{ display: "none" }}
          autoPlay
          className="player"
          preload="false"
        >
          <source src="src/assets/winning.wav" />
        </audio>
      )}
    </>
  );
};

export default AudioPlayer;
