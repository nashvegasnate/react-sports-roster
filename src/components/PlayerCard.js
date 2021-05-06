import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer } from '../helpers/data/PlayerData';
import PlayerForm from './PlayerForm';

const PlayerCard = ({
  firebaseKey,
  name,
  position,
  imageUrl,
  setPlayers
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey)
          .then(setPlayers);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/players/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Position: {position}</CardText>
      <CardImg>{imageUrl}</CardImg>
      <Button color="dark" onClick={() => handleClick('view')}>View Player</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Player</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Player'}
      </Button>
      {
        editing && <PlayerForm
          formTitle='Edit Player'
          setPlayers={setPlayers}
          firebaseKey={firebaseKey}
          name={name}
          position={position}
          imageUrl={imageUrl}
        />
      }
    </Card>
  );
};

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  setPlayers: PropTypes.func
};

export default PlayerCard;
