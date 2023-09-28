import { useConFast } from "../context/ContextProject";
import { kFormatter } from "../context/date";
import { useConData } from "../context/ContextFetchData";
import { MdAttachMoney, MdOutlineAssignmentInd } from "react-icons/md";
function StaticEmployees() {
  const { dataEmp } = useConFast();
  const { FetchEmployees } = useConData();

  FetchEmployees();
  const totalSalries = dataEmp
    .map((item) => +item.salary)
    .reduce((acc, cur) => acc + cur, 0);
  const totalEmployees = dataEmp.length;

  return (
    <>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto text-center w-56 h-52 mr-4 bg-gray-400 rounded-[70px] mb-6 ">
        <span className="rounded-full  text-5xl  p-3 mt-3  mx-auto text-stone-300 bg-violet-400">
          <MdOutlineAssignmentInd />
        </span>
        <span className="text-sm text-stone-200 my-auto ml-3  ">
          Total Employees
          <div className="text-3xl">{kFormatter(totalEmployees)}</div>
        </span>
      </span>
      <span className=" shad flex p-2 flex-col m-0 md:m-auto  text-center w-56 h-52 mr-4 bg-gray-400 rounded-[70px] mb-6  ">
        <span className="rounded-full  text-5xl  p-3 mt-3 mx-auto text-stone-300 bg-red-400">
          <MdAttachMoney />
        </span>
        <span className="text-sm text-stone-200 my-auto ml-3">
          Total Salaries
          <div className="text-3xl">{kFormatter(totalSalries)}$</div>
        </span>
      </span>
    </>
  );
}

export default StaticEmployees;
