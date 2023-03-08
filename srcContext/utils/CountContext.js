import React, { createContext } from 'react';

export const CountContext = createContext();
export const CountProvider = ({ children }) => {
  const state = {
    count:0,
    name:"TacoTacoDawg"
  }
    return (
      <CountContext.Provider value={state}>
        {/* We render children in our component so that any descendent can access the value from the provider */}
        {children}
      </CountContext.Provider>
    );
  };