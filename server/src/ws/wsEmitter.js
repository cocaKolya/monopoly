const {
  CREATE_GAME_SOCKET,
  GET_GAME_USERS_SOCKET,
  DEL_GAME,
  ROLL_DICE_SOCKET,
  START_GAME_SOCKET,
} = require('../constants/event');
const myEmitter = require('../ee');

function registerWsEmitter(map) {
  myEmitter.on(CREATE_GAME_SOCKET, (game) => {
    for (let [id, userConnect] of map) {
      userConnect.send(
        JSON.stringify({
          type: CREATE_GAME_SOCKET,
          payload: game,
        })
      );
    }
  });

  myEmitter.on(GET_GAME_USERS_SOCKET, (test, gameusers) => {
    console.log(test);
    for (let [id, userConnect] of map) {

      gameusers.map((el) => {
        if (el.id == id) {
          userConnect.send(
            JSON.stringify({
              type: GET_GAME_USERS_SOCKET,
              payload: test,
            })
          );
        }
      });
    }
  });

  myEmitter.on(START_GAME_SOCKET, (users, gameid) => {
    for (let [id, userConnect] of map) {
      users.map((el) => {
        if (id === el.id) {
          userConnect.send(
            JSON.stringify({
              type: START_GAME_SOCKET,
              payload: gameid,
            })
          );
        }
      });
    }
  });

  myEmitter.on(ROLL_DICE_SOCKET, (users, dice) => {
    for (let [id, userConnect] of map) {
      users.map((el) => {
        if (id === el.id) {
          userConnect.send(
            JSON.stringify({
              type: ROLL_DICE_SOCKET,
              payload: dice,
            })
          );
        }
      });
    }
  });
}
module.exports = registerWsEmitter;
