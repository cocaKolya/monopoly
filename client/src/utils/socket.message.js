import { NEW_GAME_CREATE } from "../constants/socket";

export const createSocketOnMessage = (dispatch) => (event) => {
  const parsedData = JSON.parse(event.data)
  switch (parsedData.type) {
    case NEW_GAME_CREATE:
      // dispatch(AC(data))
      break;

    default:
      break;
  }
}; 
