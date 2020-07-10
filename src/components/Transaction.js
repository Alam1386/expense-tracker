import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalState);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        <p className="transaction-details">{transaction.name}</p>
        <p className="amount">
          {sign}${Math.abs(transaction.amount)}
        </p>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </>
  );
};
