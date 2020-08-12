import React, { createContext, useContext, useReducer } from 'react';

// Create context to prepare data layer for what to come
export const StateContext = createContext();

// Create data layer ; children is App (wrapped within StateProvider)
export const StateProvider = ({initialState, reducer, children}) => {
  return (
    // Reducer is whatever we passed in as props
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
      {children}
    </StateContext.Provider>
  );
}

// Anytime want to get value from data layer, or dispatch action to it
export const useStateProviderValue = () => useContext(StateContext);