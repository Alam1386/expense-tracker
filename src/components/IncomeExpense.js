import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";
export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalState);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = Math.abs(
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0)
  ).toFixed(2);
  return (
    <div className="income-expense">
      <div className="row">
        <p className="title">Income</p>
        <p className="amount">${income}</p>
      </div>
      <div className="row">
        <p className="title">Expense</p>
        <p className="expense-amount">${expense}</p>
      </div>
      <div className="row">
        <p className="title">Balance</p>
        <p className="amount">${total}</p>
      </div>
    </div>
  );
};
