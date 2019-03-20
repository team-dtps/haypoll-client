const intialState = {
  prompt: '',
  choices: [],
  choice: '',
  creator: '',
  polls: [],
  loading: false
};

export default function reducer(state = intialState, action) {
  switch(action.type) {
    case 'CREATE_POLL':
      return {
        ...state,
        polls: [...state.polls, action.payload],
        loading: false
      };
    case 'CREATE_POLL_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'CREATE_NOTE_FULFILLED':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
