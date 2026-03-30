import React from 'react';
import './Snake.css';

const Snake = () => {
  const cells = [];
  // Generating a 10x10 grid with alternating row directions
  // Top left is 100 because bottom left is 1
  for (let row = 10; row >= 1; row--) {
    let start = (row - 1) * 10 + 1;
    let end = start + 9;
    if (row % 2 === 0) {
      // Even row: render from right to left (e.g. 100 to 91)
      for (let i = end; i >= start; i--) { cells.push(i); }
    } else {
      // Odd row: render from left to right (e.g. 81 to 90)
      for (let i = start; i <= end; i++) { cells.push(i); }
    }
  }

  return (
    <div className="snake-container">
      <div className="snake-board">
        {cells.map((num) => (
          <div className="snake-cell" key={num}>
            {num}
          </div>
        ))}
        {/* Overlaying the images from public directory */}
        <img src="/snake.png" alt="Snake" className="overlay snake1" />
        <img src="/snake.png" alt="Snake" className="overlay snake2" />
        <img src="/snake.png" alt="Snake" className="overlay snake3" />
        
        <img src="/ledder.png" alt="Ladder" className="overlay ladder1" />
        <img src="/ledder.png" alt="Ladder" className="overlay ladder2" />
        <img src="/ledder.png" alt="Ladder" className="overlay ladder3" />
      </div>
    </div>
  );
};

export default Snake;
