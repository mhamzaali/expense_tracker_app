import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>History Transactions</h3>
           
            <ul className="list">
            {transactions.map(transactions => (
                <Transaction key={transactions.id} transactions={transactions} />
            ))}
                
            </ul>
        </div>
    )
}
