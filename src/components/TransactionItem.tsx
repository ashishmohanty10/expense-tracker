"use client";

import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/utils";
import { toast } from "react-toastify";

import React from "react";
import deleteTransaction from "@/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure, you want to delete this tranction? "
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <div className="group flex  gap-x-4 items-center justify-between h-10 ">
      <div className=" cursor-pointer font-medium">
        <span className="text-sm ">{transaction.text}</span>:{" "}
        <span
          className={
            transaction.amount < 0 ? " text-red-500" : " text-green-500"
          }
        >
          {sign} Rs{addCommas(Math.abs(transaction.amount))}
        </span>
      </div>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="hidden group-hover:block w-fit bg-red-500 p-2 text-white font-bold "
      >
        x
      </button>
    </div>
  );
};

export default TransactionItem;
