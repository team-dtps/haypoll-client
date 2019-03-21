import React from 'react';
import PropTypes from 'prop-types';

function Choice({ total, choice }) {
  return (
    <li>
      {choice} = {total}%
    </li>
  );
}

Choice.propTypes = {
  total: PropTypes.number.isRequired,
  choice: PropTypes.string.isRequired
};

export default Choice;
