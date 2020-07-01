import React from 'react';
import './App.css';
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
