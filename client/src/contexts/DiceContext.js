import { createContext, useContext, useState } from 'react';

const DiceContext = createContext();

const DiceContextProvider = ({ children }) => {
  const [userPosition, setUserPosition] = useState(0);

  const increment = () => {
    setUserPosition((prev) => {
      console.log(userPosition);
      return prev + 1;
    });
  };
  return (
    <DiceContext.Provider value={{ userPosition, setUserPosition, increment }}>
      {children}
    </DiceContext.Provider>
  );
};

export default DiceContextProvider;

const useDiceContext = () => useContext(DiceContext);
export { useDiceContext };
