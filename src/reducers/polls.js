import { 
  CREATE_POLL, 
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED, 
  ADD_CHOICE, 
  UPDATE_CHOICE, 
  UPDATE_PROMPT 
} from '../actions/polls';

const intialState = {
  prompt: '',
  choices: [],
  choice: '',
  creator: '',
  polls: [],
  loading: false
};

export default function reducer(state = intialState, { type, payload }) {
  switch(type) {
    case CREATE_POLL:
      return {
        ...state,
        polls: [...state.polls, payload],
        prompt: '',
        choices: [],
        choice: '',
        loading: false
      };
    case CREATE_POLL_PENDING:
      return {
        ...state,
        loading: true
      };
    case CREATE_POLL_FULFILLED:
      return {
        ...state,
        loading: false
      };
    case ADD_CHOICE:
      return {
        ...state,
        choices: [...state.choices, payload],
        choice: ''
      };
    case UPDATE_CHOICE: 
      return {
        ...state,
        choice: payload
      };
    case UPDATE_PROMPT: 
      return {
        ...state,
        prompt: payload
      };
    default:
      return state;
  }
}
