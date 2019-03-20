import React from 'react';
import PropTypes from 'prop-types';

function PollForm({ prompt, choice, onSubmit, onChange, onAdd }) {
  return (
    <form onSubmit={onSubmit.bind(null, prompt, choice)}>
      <input type="text" value={prompt} name="prompt" onChange={onChange} />
      <input type="text" value={choice} name="choice" onChange={onChange} />
      <button onClick={onAdd.bind(null, choice)}>Add Choice</button>
    </form>
  );
}

PollForm.propTypes = {
  prompt: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default PollForm;
