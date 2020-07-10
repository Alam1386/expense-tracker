import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalState);
  return (
    <div className="transaction-list">
      <h3 className="title">Transaction Details</h3>
      <ul className="wrapper">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
