import {USER_ACTION} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION.UPDATE_SESSION:
      return Object.assign({}, state, {...action.payload.session});
    default:
      return state;
  }
};
