import {USER_ACTION} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION.UPDATE_USER:
      return Object.assign({}, state, {...action.payload.user});
    default:
      return state;
  }
};
