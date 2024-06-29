import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Guest = () => {
  return (
    <div className="text-center mt-28 flex flex-col items-center ">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <p className="mt-4 text-lg font-medium">
        Please sign in to manage your transactions
      </p>

      <div className="bg-black text-white hover:shadow-md hover:bg-slate-700 duration-200 px-4 py-1 rounded-lg font-medium text-sm mt-4">
        <SignInButton />
      </div>
    </div>
  );
};

export default Guest;
