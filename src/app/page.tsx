import AddTransactions from "@/components/AddTransactions";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import TransactionList from "@/components/TransactionList";
import IncomeExpense from "@/components/incomeExpense";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h1>Welcome,{user.firstName}</h1>

      <Balance />
      <IncomeExpense />
      <AddTransactions />
      <TransactionList />
    </main>
  );
};

export default HomePage;
