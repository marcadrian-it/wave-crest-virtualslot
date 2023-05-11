import React, { useState, useEffect, useRef } from "react";

interface SpinnerProps {
  timer: number;
  onFinish: (symbol: number) => void;
}

const Spinner: React.FC<SpinnerProps> = ({ timer, onFinish }) => {
  const [position, setPosition] = useState(0);
  const timeRemainingRef = useRef(timer);
  const multiplier = Math.floor(Math.random() * (4 - 1) + 1);
  const iconHeight = 188;
  const start = setStartPosition();
  const speed = iconHeight * multiplier;

  function setStartPosition() {
    return Math.floor(Math.random() * 9) * iconHeight * -1;
  }

  function moveBackground() {
    setPosition((prevPosition) => prevPosition - speed);
  }

  function getSymbolFromPosition() {
    const currentPosition = start;
    const maxPosition = iconHeight * 8 * -1; // Adjusted range for 9 symbols

    let moved =
      Math.floor((timer - timeRemainingRef.current) / 100) * multiplier;
    let currentPositionCopy = currentPosition;

    for (let i = 0; i < moved; i++) {
      currentPositionCopy -= iconHeight;

      if (currentPositionCopy < maxPosition) {
        currentPositionCopy = 0;
      }
    }

    const adjustedPosition = currentPositionCopy - iconHeight;
    onFinish(adjustedPosition);
  }

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const tick = () => {
      if (timeRemainingRef.current <= 0) {
        getSymbolFromPosition();
      } else {
        moveBackground();
        timeRemainingRef.current -= 100;
        timerId = setTimeout(tick, 100);
      }
    };

    setPosition(start);
    timeRemainingRef.current = timer;

    timerId = setTimeout(tick, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      style={{ backgroundPosition: `0px ${position}px` }}
      className="icons"
    />
  );
};

export default Spinner;
