// src/Team.js
import React from 'react';
import Player from './Player';

function Team({ team }) {
  return (
    <div className="team">
      <h2>{team.teamName}</h2>
      <p>City: {team.city}</p>
      <h3>Players:</h3>
      <ul>
        {team.players.map((player, index) => (
          <Player key={index} player={player} />
        ))}
      </ul>
    </div>
  );
}

export default Team;