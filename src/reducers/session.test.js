import reducer from './session';

jest.mock('../services/auth.js');

describe('session reducer', () => {
  it('handles setting the session', () => {
    const state = {
      session: { 
        token: '',
        handle: '',
        id: '',
        profileImg: ''
      }
    };

    const session = reducer(state, {
      type: 'SET_SESSION',
      payload: {
        token: 'fjdaskfls39',
        handle: 'kristinhortsch',
        id: '1234',
        profileImg: 'image'
      }
    });

    expect(session).toEqual({
      token: 'fjdaskfls39',
      handle: 'kristinhortsch',
      id: '1234',
      profileImg: 'image'
    });
  });
});
