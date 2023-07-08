import { createContext, useState } from "react";

export const getElementTopPosition = createContext();

export const ContextWrappeer = ({ children }) => {
  const [position, setPosition] = useState(null);

  return (
    <getElementTopPosition.Provider value={[position, setPosition]}>
      {children}
    </getElementTopPosition.Provider>
  );
};
