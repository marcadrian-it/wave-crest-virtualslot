import React from "react";

interface RepeatButtonProps {
  onClick: () => void;
}

export const RepeatButton: React.FC<RepeatButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        id="repeatButton"
        aria-label="Play again."
        onClick={onClick}
      ></button>
    </div>
  );
};
