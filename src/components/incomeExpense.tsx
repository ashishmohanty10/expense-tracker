import getIncomeExpense from "@/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="flex w-fit justify-center gap-x-5 divide-x-2 px-4 py-2 shadow-lg bg-slate-100">
        <div>
          <h4 className="text-xl font-semibold text-green-500">Income</h4>
          <p className="text-sm font-medium">
            Rs {addCommas(Number(income?.toFixed(2)))}
          </p>
        </div>

        <div className="pl-4">
          <h4 className="text-xl font-semibold text-red-500">Expense</h4>

          <p className="text-sm font-medium">
            Rs {addCommas(Number(expense?.toFixed(2)))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
