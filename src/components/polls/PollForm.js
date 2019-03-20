import React from 'react';
import PropTypes from 'prop-types';

function PollForm({ prompt, choices, choice, onSubmit, onChange, createPoll, addChoice }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="prompt">Prompt</label>
      <input type="text" value={prompt} name="prompt" onChange={onChange} />

      <label htmlFor="choice">Choice</label>
      <input type="text" value={choice} name="choice" onChange={onChange} />
      
      <label htmlFor="add-choice">Add Choice</label>
      <button type="button" onClick={addChoice.bind(null, choice)} id="add-choice">Add Choice</button>
      
      <label htmlFor="create-poll">Create Poll</label>
      <button type="submit" onClick={createPoll.bind(null, prompt, choices)} id="create-poll">Create Poll</button>
    </form>
  );
}

PollForm.propTypes = {
  prompt: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  createPoll: PropTypes.func.isRequired,
  addChoice: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired
};

export default PollForm;
