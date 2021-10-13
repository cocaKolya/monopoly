const {
  CREATE_GAME_SOCKET,
  NEW_PERSON,
  DEL_GAME,
  START_GAME_SOCKET,
} = require('../constants/event');
const myEmitter = require('../ee');

function registerWsEmitter(map) {
  myEmitter.on(CREATE_GAME_SOCKET, (game) => {
    // console.log(map);

    for (let [id, userConnect] of map) {
      console.log(id);
      userConnect.send(
        JSON.stringify({
          type: CREATE_GAME_SOCKET,
          payload: game,
        })
      );
    }
  });

  myEmitter.on(NEW_PERSON, (test) => {
    for (let [id, userConnect] of map) {
      test.map((el) => {
        if (el.id == id) {
          userConnect.send(
            JSON.stringify({
              type: NEW_PERSON,
              payload: game,
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
}
module.exports = registerWsEmitter;
