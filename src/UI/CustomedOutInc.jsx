import { useConFast } from "../context/ContextProject";
import TodayDeal from "./TodayDeal";
import { useConData } from "../context/ContextFetchData";

function CustomedOutInc() {
  const { dataInc, today } = useConFast();
  const { FetchIncomes } = useConData();
  FetchIncomes();
  const dataIncFiltered = dataInc.filter((item) => item.date === today);
  return (
    <>
      <span className=" flex flex-col mr-2  md:mx-auto mx-0  mt-6 text-center w-3/6 md:w-[49%] h-[250px] bg-gray-300  rounded-[40px] p-5 text-2xl mb-2">
        <div className="sm:text-xl text-lg font-semibold text-stone-700 mx-auto p-0 h-fit   pb-1 w-full">
          All Deals Today
        </div>
        <div className=" overflow-y-scroll scroll">
          {dataIncFiltered.map((item) => (
            <TodayDeal item={item.company} key={item.id} />
          ))}
        </div>
      </span>
    </>
  );
}

export default CustomedOutInc;
