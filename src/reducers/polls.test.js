import reducer from './polls';
import { CREATE_POLL, CREATE_POLL_PENDING, CREATE_POLL_FULFILLED } from '../actions/polls';


describe('polls reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      prompt: '',
      choices: [],
      user: '',
      loading: false,
      polls: []
    };
  });

  it('handles the create poll action', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL,
      payload: {
        prompt: 'Question',
        choices: ['a', 'b', 'c'],
        user: '1234'
      }
    });
    expect(updatedState).toEqual({
      ...state,
      polls: [{
        prompt: 'Question',
        choices: ['a', 'b', 'c'],
        user: '1234'
      }]
    });
  });

  it('handles CREATE_POLL_PENDING action', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL_PENDING
    });
    expect(updatedState).toEqual({
      ...state,
      loading: true
    });
  });

  it('handles the CREATE_POLL_FULFILLED action', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL_FULFILLED
    });
    expect(updatedState).toEqual({
      ...state,
      loading: false
    });
  });
});
