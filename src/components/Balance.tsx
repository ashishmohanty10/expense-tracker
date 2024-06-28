import getUserBalance from "@/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <div className="mt-5">
      <h4>YOUR BALANCE</h4>
      <h1>Rs{addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>
    </div>
  );
};

export default Balance;
