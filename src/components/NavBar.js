import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/players">PLAYERS</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/add-player">ADD PLAYER</Link>
      </NavItem>
      </>
  );

  return (
    <div className="navBar">
      <Navbar color="light" light expand="md" justifycontent="space-around">
        <Link to="/">HIGHLANDERS</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          { user && authenticated()}
            <div>
              {
                user !== null
                && <div>
                  {
                    user
                      ? <Button color='danger' onClick={signOutUser}>SIGN OUT</Button>
                      : <Button color='light' onClick={signInUser}>SIGN IN</Button>
                  }
                </div>
              }
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
