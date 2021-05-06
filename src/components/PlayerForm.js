import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addPlayer, updatePlayer } from '../helpers/data/PlayerData';

const PlayerForm = ({
  formTitle,
  setPlayers,
  name,
  position,
  imageUrl,
  firebaseKey
}) => {
  const [player, setPlayer] = useState({
    name: name || '',
    position: position || '',
    imageUrl: imageUrl || '',
    firebaseKey: firebaseKey || null
  });
  // const history = useHistory();

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      // make call to updateStudent to update student and rerender the DOM
      updatePlayer(player).then(setPlayers);
    } else {
      addPlayer(player).then(setPlayers);
      setPlayer({
        name: '',
        position: '',
        imageUrl: '',
        firebaseKey: null
      });
    }
  };

  return (
    <div className='player-form'>
      <Form id='addPlayerForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={player.name}
            type='text'
            placeholder='Enter a Player Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="position">Position:</Label>
          <Input
            name='position'
            id='position'
            value={player.position}
            type='text'
            placeholder='Enter Position'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="imageUrl">Image URL:</Label>
          <Input
            name='imageUrl'
            id='imageUrl'
            value={player.imageUrl}
            type='string'
            placeholder='Enter Image URL'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func,
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default PlayerForm;
