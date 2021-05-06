import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';
import Players from '../views/Players';
import SinglePlayer from '../views/SinglePlayer';
// import NotFound from '../views/NotFound';
export default function Routes({ user, players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user}/>} />
        <Route
          exact
          path='/players'
          component={() => <Players players={players} setPlayers={setPlayers} />}
        />
        <Route
          path='/players/:firebaseKey'
          component={SinglePlayer}
        />
        <Route
          path='/add-player'
          component={() => <AddPlayer setPlayers={setPlayers} />}
        />
        {/* <Route path='*' component={NotFound} /> */}
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};
