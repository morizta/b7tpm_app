import {combineReducers} from 'redux';

import app from './app.reducer';
import user from './user.reducer';
import session from './session.reducer';

export default combineReducers({
  app,
  user,
  session,
});
