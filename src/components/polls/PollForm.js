import React from 'react';
import PropTypes from 'prop-types';

function PollForm({ prompt, choices, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={prompt} name="prompt" onChange={onChange} />
      <input type="text" value={choices} name="choices" onChange={onChange} />
    </form>
  );
}

PollForm.propTypes = {
  prompt: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PollForm;
