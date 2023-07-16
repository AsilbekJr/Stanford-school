import { createContext, useState } from "react";

export const getElementTopPosition = createContext();

export const ContextWrappeer = ({ children }) => {
  // const [position, setPosition] = useState(null);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  return (
    <getElementTopPosition.Provider value={[viewerIsOpen, setViewerIsOpen]}>
      {children}
    </getElementTopPosition.Provider>
  );
};
