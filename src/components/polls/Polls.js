import React from 'react';
import PropTypes from 'prop-types';

export default function Polls({ polls }) {
  const pollItems = polls.map(poll => {
    return <li key={poll._id}>poll.questions</li>;
  });

  return (
    <ul> {pollItems} </ul>
  );
}

Polls.propTypes = {
  polls: PropTypes.array.isRequired
};
