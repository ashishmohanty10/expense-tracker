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
    <>
      <h3>Add transaction</h3>

      <form action={clientAction} ref={formRef}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" placeholder="Enter Text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negetive - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter Amount"
            step="0.01"
          />
        </div>

        <button className="btn">Add Tranction</button>
      </form>
    </>
  );
};

export default AddTransactions;
