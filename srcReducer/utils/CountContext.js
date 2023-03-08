import React, { createContext,useReducer } from 'react';
import reducer from './reducer';

export const CountContext = createContext();
export const CountProvider = ({ value={},children}) => {
  const initState = {
    count:0,
    name:"TacoTacoDawg"
  }
  const [state, dispatch] = useReducer(reducer,initState);
    return (
      <CountContext.Provider value={[state, dispatch]} >
        {/* We render children in our component so that any descendent can access the value from the provider */}
        {children}
      </CountContext.Provider>
    );
  };
    