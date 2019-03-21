import { setSession } from './session';

jest.mock('../services/auth.js');

describe('actions test', () => {
  it('sets the session', () => {
    const action = setSession();

    expect(action).toEqual({ 
      fulfilledType: 'SET_SESSION_FULFILLED',
      payload: Promise.resolve(),
      pendingType: 'SET_SESSION_PENDING',
      rejectedType: 'SET_SESSION_REJECTED',
      type: 'SET_SESSION'
    });
  });
});
