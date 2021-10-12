import { GET_ALL_USERS } from '../types/userTypes';

export const allUsersReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS: {
      return payload;
    }
    default:
      return state;
  }
};
