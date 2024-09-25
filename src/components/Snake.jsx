import React from 'react';
import { useSnakeGame } from '../hooks/useSnakeGame';
import SnakeGrid from './SnakeGrid';

const Snake = () => {
  const { grid, score, gameOver, startGame } = useSnakeGame();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Snake Game</h1>
      <div className="mb-4">
        <span className="text-xl font-semibold">Score: {score}</span>
      </div>
      <SnakeGrid grid={grid} />
      {gameOver && (
        <div className="mt-4">
          <p className="text-xl font-semibold mb-2">Game Over!</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={startGame}
          >
            Start New Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Snake;