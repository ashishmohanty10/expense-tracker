"use client";

import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/utils";
import { toast } from "react-toastify";

import React from "react";
import deleteTransaction from "@/actions/deleteTransaction";
import { Trash2 } from "lucide-react";

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
    <div className="group flex gap-x-4 items-center justify-between h-10 hover:shadow-md px-2 rounded-md">
      <div className=" cursor-pointer font-medium">
        <span className="text-lg ">{transaction.text}</span>:{" "}
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
        className="hidden group-hover:block w-fit text-black hover:text-red-500 transition-all p-2  font-bold "
      >
        <Trash2 />
      </button>
    </div>
  );
};

export default TransactionItem;
