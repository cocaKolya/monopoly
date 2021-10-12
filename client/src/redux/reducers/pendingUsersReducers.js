import { ADD_PENDING_USERS } from '../types/userTypes';

export const pendingUsersReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PENDING_USERS: {
      return payload;
    }
    default:
      return state;
  }
};
