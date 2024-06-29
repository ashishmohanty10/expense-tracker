import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const Heaader = async () => {
  const user = await checkUser();

  return (
    <nav className="h-14 bg-black">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <h2 className="text-white font-bold text-2xl">Expense Tracker</h2>

        <div className="flex items-center h-14">
          <SignedOut>
            <div className="bg-white hover:bg-slate-700 hover:text-white duration-200 px-4 py-1 rounded-lg font-medium text-sm">
              <SignInButton />
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Heaader;
