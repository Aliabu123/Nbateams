// src/Player.js
import React from 'react';

function Player({ player }) {
  return (
    <li>
      {player.name} - {player.position}
    </li>
  );
}

export default Player;

       