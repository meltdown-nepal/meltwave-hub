
import React from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
        gravity={0.3}
      />
    </div>
  );
};

export default Confetti;
