import React from 'react';
import PropTypes from 'prop-types';

function Choice({ choice, totalVotes }) {
  return (
    <li>
      {choice} = {totalVotes}
    </li>
  );
}

Choice.propTypes = {
  choice: PropTypes.string.isRequired,
  totalVotes: PropTypes.number.isRequired
};
