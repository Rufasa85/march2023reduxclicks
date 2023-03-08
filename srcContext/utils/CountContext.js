import React, { createContext } from 'react';

export const CountContext = createContext();
export const CountProvider = (props) => {
  const state = {
    count:12,
    name:"TacoTacoDawg"
  }
    return (
      <CountContext.Provider value={state}>
        {/* We render children in our component so that any descendent can access the value from the provider */}
        {props.children}
      </CountContext.Provider>
    );
  };