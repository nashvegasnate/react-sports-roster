import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import Home from '../views/Home';
// import Players from '../views/Players';

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" />
          <Route path="/players" />
          <Route path="/add-player">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
