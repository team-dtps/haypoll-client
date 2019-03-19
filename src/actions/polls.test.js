import { 
  createPoll, 
  CREATE_POLL, 
  CREATE_POLL_FULFILLED, 
  CREATE_POLL_PENDING, 
  CREATE_POLL_ERROR
} from './polls';

describe('poll actions', () => {
  it('create a CREATE_POLL action', () => {
    const action = createPoll({});
    expect(action).toEqual({
      type: CREATE_POLL,
      pendingType: CREATE_POLL_PENDING,
      fulfilledType: CREATE_POLL_FULFILLED,
      rejectedType: CREATE_POLL_ERROR,
      payload: expect.any(Promise)
    });
  });
});
