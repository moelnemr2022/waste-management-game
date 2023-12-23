import PropTypes from 'prop-types';

const Leaderboard = ({ data }) => {
  return (
    <div>
      <h2>🏆 Leaderboard</h2>
      <ul>
        {data.map((entry) => (
          <li key={entry.id}>
            {entry.name}: {entry.score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

Leaderboard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Leaderboard;
