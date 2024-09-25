import React from 'react';

const SnakeGrid = ({ grid }) => {
  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${grid[0].length}, 1fr)` }}>
      {grid.flat().map((cell, index) => (
        <div
          key={index}
          className={`w-5 h-5 ${
            cell === 1 ? 'bg-green-500' : cell === 2 ? 'bg-red-500' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

export default SnakeGrid;
