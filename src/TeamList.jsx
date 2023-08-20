// src/TeamList.js
import React from 'react';
import { nbaTeams } from './Data';
import Team from './Team';

function TeamList() {
  return (
    <div className="team-list">
      {nbaTeams.map((team, index) => (
        <Team key={index} team={team} />
      ))}
    </div>
  );
}

export default TeamList;