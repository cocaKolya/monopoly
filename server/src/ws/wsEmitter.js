const { NEW_GAME_CREATE } = require('../constants/event');
const myEmitter = require('../ee');

function registerWsEmitter(map) {
  myEmitter.on(NEW_GAME_CREATE, (game) => {
    for (let [id, userConnect] of map) {
      userConnect.send(
        JSON.stringify({
          type: 'newGameCreate',
          payload: game,
        })
      );
    }
  });
}

module.exports = registerWsEmitter;
