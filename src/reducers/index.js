import { combineReducers } from 'redux';
import session from './session';
import polls from './polls';

export default combineReducers({
  session,
  polls
});
