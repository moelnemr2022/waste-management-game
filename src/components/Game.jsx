import { useState } from 'react';
import Camera from './Camera';
import Leaderboard from './Leaderboard';
import '/src/App.css';

const Game = () => {
  const [score, setScore] = useState(0);
  const [leaderboard] = useState([]);

  const handleScore = (points) => {
    setScore(score + points);
  };

  const handleSubmission = () => {
    // Add logic for handling submissions if needed
  };

  return (
    <div>
      <h1 className='App'>🎮 Waste Management Game</h1>
      <h2 className='App'>Your Score: {score}</h2>
      <Camera onScore={handleScore} onSubmission={handleSubmission} />
      <Leaderboard data={leaderboard} />
    </div>
  );
};

export default Game;