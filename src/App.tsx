import React, { useState } from "react";
import Spinner from "./components/Spinner";
import { RepeatButton } from "./components/RepeatButton";
import WinnerPopup from "./components/WinnerPopup";
import { Footer } from "./components/Footer";
import Logo from "./components/Logo";

const App: React.FC<{}> = () => {
  const [isWinner, setIsWinner] = useState<number | null>(null);
  const [_, setSpinResults] = useState<number[]>([]);
  const [spinnersKey, setSpinnersKey] = useState(0);

  const handleSpinFinish = (position: number) => {
    setSpinResults((prevResults) => {
      const newResults = [...prevResults, position];

      if (
        newResults.length === 3 &&
        newResults.every(
          (result) => result !== null && result === newResults[0]
        )
      ) {
        setIsWinner(1);
      }

      return newResults;
    });
  };

  const handleRepeatClick = () => {
    setIsWinner(null);
    setSpinResults([]);
    setSpinnersKey((prevKey) => prevKey + 1);
  };

  const handleClosePopup = () => {
    setIsWinner(null);
  };

  return (
    <div>
      {isWinner !== null && (
        <audio
          style={{ display: "none" }}
          autoPlay
          className="player"
          preload="false"
        >
          <source src="/winning.wav" />
        </audio>
      )}
      <Logo />
      <WinnerPopup isOpen={isWinner} onClose={handleClosePopup} />
      <div className="spinner-repeat-container">
        <div className="spinner-container">
          <Spinner
            key={`${spinnersKey}-1`}
            onFinish={handleSpinFinish}
            timer={1000}
          />
          <Spinner
            key={`${spinnersKey}-2`}
            onFinish={handleSpinFinish}
            timer={1400}
          />
          <Spinner
            key={`${spinnersKey}-3`}
            onFinish={handleSpinFinish}
            timer={2200}
          />
          <div className="gradient-fade"></div>
        </div>
        <RepeatButton onClick={handleRepeatClick} />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
