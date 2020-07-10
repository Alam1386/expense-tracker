import React from "react";
import { Header } from "./Header";
import { IncomeExpense } from "./IncomeExpense";
import { Content } from "./Content";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

function Main() {
  return (
    <div className="main">
      <Header />
      <Content>
        <IncomeExpense />
        <AddTransaction />
        <TransactionList />
      </Content>
    </div>
  );
}

export default Main;
