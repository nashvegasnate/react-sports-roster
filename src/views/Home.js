import React from 'react';
import PropTypes from 'prop-types';
import highlanderLogo from '../App/images/highlanderLogo.png';

export default function Home({ user }) {
  return (
    <div>
      { user
        ? <h1>Hello, {user.fullName}</h1>
        : <h1>Hello!</h1>
      }
      <img src={highlanderLogo} style={{
        backgroundSize: 'cover',
        height: '50em',
        width: '50em',
        padding: '2em',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }} />
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
