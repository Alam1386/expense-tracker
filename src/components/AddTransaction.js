import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";
export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalState);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div className="add-transaction">
      <h3 className="title">Add New Transaction</h3>
      <form className="wrapper" onSubmit={onSubmit}>
        <div className="row">
          <p className="transaction-details">Enter transaction details:</p>
          <input
            className="input"
            placeholder="Enter transaction details"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="row">
          <p className="transaction-details">Transaction Amount:</p>
          <input
            className="input"
            placeholder="0"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button className="button">Add Transaction</button>
      </form>
    </div>
  );
};
