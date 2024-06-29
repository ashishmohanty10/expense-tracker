import { Transaction } from "@/types/Transaction";
import React from "react";
import getTransactions from "@/actions/getTransactions";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <div className="px-4 md:px-0 md:w-1/3">
      <h3 className="font-bold text-xl mb-5">History</h3>

      <ul className="">
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </div>
  );
};

export default TransactionList;
