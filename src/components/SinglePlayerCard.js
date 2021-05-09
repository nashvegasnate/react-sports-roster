import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';

export default function SinglePlayerCard({ player }) {
  return (
    <Card>
      <CardImg src={player.imageUrl} />
      <Card body>
        <CardTitle tag="h5">{player.name}</CardTitle>
        <CardText>Position: {player.position}</CardText>
      </Card>
    </Card>

  // <div>
  //   <h1>Player: {player.name }</h1>
  //   <h2>Position: {player.position}</h2>
  //   <img src={player.imageUrl}/>
  // </div>
  );
}

SinglePlayerCard.propTypes = {
  // children: PropTypes.any,
  position: PropTypes.any,
  player: PropTypes.object,
  imageUrl: PropTypes.string
};
