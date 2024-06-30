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
    <main className="py-5">
      <h1 className="text-center text-4xl font-extrabold">
        Welcome, {user.firstName}
      </h1>

      <Balance />
      <IncomeExpense />
      <div className="md:flex justify-center items-start gap-x-10 mt-10 w-full">
        <AddTransactions />
        <TransactionList />
      </div>
    </main>
  );
};

export default HomePage;
