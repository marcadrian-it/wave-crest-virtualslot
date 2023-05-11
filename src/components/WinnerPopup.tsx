import React from "react";
import Modal from "react-modal";

interface WinnerPopupProps {
  isOpen: number | null;
  onClose: () => void;
}

const WinnerPopup: React.FC<WinnerPopupProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Modal
          isOpen={true}
          onRequestClose={onClose}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
            content: {
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "center",
            },
          }}
        >
          <div>
            <h2 className="text-4xl mb-4">🤑 WINNER 🤑</h2>
            <p className="text-lg">Congratulations! You have won!</p>
            <button
              className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default WinnerPopup;
