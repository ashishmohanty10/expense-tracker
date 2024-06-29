import getUserBalance from "@/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <div className="mt-5 flex gap-x-10 w-full justify-center text-lg md:text-xl mb-2">
      <h4 className="font-bold">YOUR BALANCE : </h4>
      <h1>
        <span>Rs </span>
        <span className="text-green-500 font-medium">
          {addCommas(Number(balance?.toFixed(2) ?? 0))}
        </span>
      </h1>
    </div>
  );
};

export default Balance;
