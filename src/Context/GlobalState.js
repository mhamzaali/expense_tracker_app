import React, { createContext , useReducer } from 'react'
import AppReducer from './AppReducer'

// initial State
const initialState = {
transactions: [

 ]
}
// Create Context
export const GlobalContext = createContext(initialState)

// Provider Componenet
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
  // action
  function deleteTransaction(id){
      dispatch(
          {
              type : 'Delete_Transaction',
              payload : id

          }
      )
  }
  function addTransaction(transactions){
    dispatch(
        {
            type : 'Add_Transaction',
            payload : transactions

        }
    )
}
  
    return (<GlobalContext.Provider value = {{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>)
}