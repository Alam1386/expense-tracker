import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};
export const GlobalState = createContext(initialState);

// Create Provider

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <GlobalState.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};
