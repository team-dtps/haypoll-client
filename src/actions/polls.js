import { createAction } from 'promise-middleware-redux';
import { postPoll } from '../services/polls';

export const [
  createPoll,
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED,
  CREATE_POLL_ERROR
] = createAction('CREATE_POLL', postPoll);
