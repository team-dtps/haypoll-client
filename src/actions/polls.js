import { createAction } from 'promise-middleware-redux';
import { postPoll } from '../services/polls';

export const [
  createPoll,
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED,
  CREATE_POLL_ERROR
] = createAction('CREATE_POLL', postPoll);

export const UPDATE_PROMPT = 'UPDATE_PROMPT';
export const updatePrompt = prompt => ({
  type: UPDATE_PROMPT,
  payload: prompt
});

export const UPDATE_CHOICE = 'UPDATE_CHOICE';
export const updateChoice = choice => ({
  type: UPDATE_CHOICE,
  payload: choice
});

export const ADD_CHOICE = 'ADD_CHOICE';
export const addChoice = choice => ({
  type: ADD_CHOICE,
  payload: choice
});
