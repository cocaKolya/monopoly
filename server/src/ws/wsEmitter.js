const {
  CREATE_GAME_SOCKET,
  NEW_PERSON_SOCKET,
  DEL_GAME,
  ROLL_DICE_SOCKET,
  START_GAME_SOCKET,
} = require('../constants/event');
const myEmitter = require('../ee');

function registerWsEmitter(map) {
  myEmitter.on(CREATE_GAME_SOCKET, (game) => {
    console.log(1111);
    for (let [id, userConnect] of map) {
      userConnect.send(
        JSON.stringify({
          type: CREATE_GAME_SOCKET,
          payload: game,
        })
      );
    }
  });

  myEmitter.on(NEW_PERSON_SOCKET, (test, gameusers) => {
    for (let [id, userConnect] of map) {
      
      gameusers.map((el) => {
        if (el.id == id) {
          userConnect.send(
            JSON.stringify({
              type: NEW_PERSON_SOCKET,
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
