import React, { createContext,useReducer } from 'react';
import countReducer from './reducer';

export const CountContext = createContext();
export const CountProvider = ({children}) => {
  const initState = {
    count:0,
    name:"TacoTacoDawg"
  }
  const [state, dispatch] = useReducer(countReducer,initState);
    return (
      <CountContext.Provider value={[state, dispatch]} >
        {/* We render children in our component so that any descendent can access the value from the provider */}
        {children}
      </CountContext.Provider>
    );
  };
    