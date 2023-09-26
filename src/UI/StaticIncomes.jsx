import { RiHandHeartFill } from "react-icons/ri";
import { LuPackageSearch } from "react-icons/lu";
import { useConFast } from "../context/ContextProject";
import { kFormatter } from "../context/date";
function StaticIncomes() {
  const { dataInc, Change } = useConFast();
  Change("incomes");
  const totalIncomes = dataInc
    .map((item) => +item.benefit)
    .reduce((acc, cur) => acc + cur, 0);
  const totalPackages = dataInc
    .map((item) => +item.packages)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto  text-center w-56 h-52 mr-4 bg-gray-400 rounded-[70px] mb-6 ">
        <span className="rounded-full  text-5xl  p-3  mt-3 mx-auto text-stone-300 bg-green-400">
          <RiHandHeartFill />
        </span>
        <span className="text-sm text-stone-300 my-auto ml-3 ">
          Total Revenues
          <div className="text-3xl">{kFormatter(totalIncomes)}$</div>
        </span>
      </span>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto  text-center w-56 h-52 mr-4 bg-gray-400 rounded-[70px] mb-6 ">
        <span className="rounded-full  text-5xl  p-3 mt-3 mx-auto text-stone-300 bg-sky-400">
          <LuPackageSearch />
        </span>
        <span className="text-sm text-stone-300 my-auto ml-3 ">
          Total Packages
          <div className="text-3xl">{kFormatter(totalPackages)}p</div>
        </span>
      </span>
    </>
  );
}

export default StaticIncomes;
