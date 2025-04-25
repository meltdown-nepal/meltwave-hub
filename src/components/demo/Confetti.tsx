
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Confetti = () => {
  const [pieces, setPieces] = useState<Array<{ x: number; delay: number }>>([]);

  useEffect(() => {
    setPieces(
      Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((piece, i) => (
        <motion.div
          key={i}
          initial={{ y: -10, x: piece.x + '%', scale: 0 }}
          animate={{
            y: ['0%', '100%'],
            scale: [0, 1, 1, 0.5, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            delay: piece.delay,
            ease: 'easeOut',
          }}
          className="absolute w-2 h-2 bg-primary rounded-full"
        />
      ))}
    </div>
  );
};

export default Confetti;
