"use client";

import addTransaction from "@/actions/addTransaction";
import { toast } from "react-toastify";
import { useRef } from "react";

const AddTransactions = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added");
      formRef.current?.reset();
    }
  };

  return (
    <div className="mb-5 md:mb-0 px-4 md:px-0 md:w-2/3">
      <h3 className=" font-semibold text-xl mb-5 ">Add transaction</h3>

      <form action={clientAction} ref={formRef}>
        <div className="flex flex-col gap-y-2 mb-2">
          <label htmlFor="text-sm">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter Text"
            className="py-2 px-4 border border-slate-500 rounded-md focus-within:border-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mb-2">
          <label htmlFor="amount" className="text-sm">
            Amount (negetive - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter Amount"
            step="0.01"
            className="py-2 px-4 border border-slate-500 rounded-md focus-within:border-none"
          />
        </div>

        <button className="bg-black text-white text-sm font-semibold w-full py-2  mt-4 rounded-md hover:bg-slate-700 duration-200">
          Add Tranction
        </button>
      </form>
    </div>
  );
};

export default AddTransactions;
