import React from 'react';
import PropTypes from 'prop-types';

export default function SinglePlayerCard({ player }) {
  return (
    <div>
      <h1>Player: {player.name }</h1>
      <h2>Position: {player.position}</h2>
      <img src={player.imageUrl}/>
    </div>
  );
}

SinglePlayerCard.propTypes = {
  children: PropTypes.any,
  position: PropTypes.any,
  player: PropTypes.object,
  imageUrl: PropTypes.string
};
