import React from 'react'

const ListofPlayers = ({players}) => {
  return (
    <div>
      <h1>List of Players</h1>
        {players.map((player, index) =>(
          <li key={index}>Mr. {player.name} <span>{player.score}</span></li>
        ))}
      <hr/>
      <h1>List of Players having Score Less than 70</h1>
      {players.map((player, index) =>(
          (player.score <= 70) && <li key={index}>Mr. {player.name} <span>{player.score}</span></li>
        ))}
    </div>
  )
}

export default ListofPlayers