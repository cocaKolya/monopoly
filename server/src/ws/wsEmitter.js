const { NEW_GAME_CREATE, NEW_PERSON } = require('../constants/event');
const myEmitter = require('../ee');

function registerWsEmitter(map) {

  myEmitter.on(NEW_GAME_CREATE, (game) => {
    for (let [id, userConnect] of map) {
      userConnect.send(
        JSON.stringify({
          type: NEW_GAME_CREATE,
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
}

module.exports = registerWsEmitter;
