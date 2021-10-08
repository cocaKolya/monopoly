import { createContext, useContext, useState } from 'react';

const DiceContext = createContext();

const DiceContextProvider = ({ children }) => {
  const players = [
    { id: 1, name: 'fedor' },
    { id: 2, name: 'oleg' },
    { id: 3, name: 'ivan' },
    { id: 4, name: 'stas' },
  ];
  const [userPosition, setUserPosition] = useState(players.map((el) => 0));
  const [playerTurn, setPlayerTurn] = useState(0);
  const [transform, setTransform] = useState(false);

  const changeTransform = () => setTransform(!transform);

  const nextPlayer = () => {
    const playerNum = players.map((el) => el.id);
    if (playerTurn < playerNum.length - 1) {
      setPlayerTurn((prev) => prev + 1);
    } else setPlayerTurn(0);
  };

  const increment = () => {
    setUserPosition((prev) => {
      console.log(userPosition);
      return prev + 1;
    });
  };
  return (
    <DiceContext.Provider
      value={{
        userPosition,
        setUserPosition,
        increment,
        players,
        nextPlayer,
        playerTurn,
        setPlayerTurn,
        transform,
        changeTransform,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export default DiceContextProvider;

const useDiceContext = () => useContext(DiceContext);
export { useDiceContext };
