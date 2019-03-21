import { getToken } from '../selectors/session';

describe('selectors test', () => {
  it('can get a token', () => {
    const state = {
      session: {
        token: 'google-oauth2|102356666328752319799',
        handle: 'fggsd',
        id: '1',
        profileImg: 'img'
      }
    };

    const fetchedToken = getToken(state);

    expect(fetchedToken).toEqual('google-oauth2|102356666328752319799');
  });
});
