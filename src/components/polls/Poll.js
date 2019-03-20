import React from 'react';
import PropTypes from 'prop-types';

export default function Poll({ poll }) {
  const choicesList = poll.choice.map(choice => {
    return <li key={choice}>{choice}</li>;
  });

  const { question } = poll;
  return (
    <>
    <h2>{question}</h2>
    <ul> {choicesList} </ul>
    </>
  );
}

Poll.propTypes = {
  poll: PropTypes.object.isRequired
};
