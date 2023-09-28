import { useConFast } from "../context/ContextProject";
import UnconfirmEmp from "./UnconfirmEmp";
import { useConData } from "../context/ContextFetchData";

function CustomedOutEmp() {
  const { dataEmp } = useConFast();
  const { FetchEmployees } = useConData();
  FetchEmployees();
  const dataEmpFiltered = dataEmp.filter((item) => !item.confirm);
  return (
    <>
      <span className="shad flex flex-col md:mx-auto mx-0 mt-6 text-centermx-auto  text-center w-3/6 md:w-[49%] h-[250px] bg-gray-300  rounded-[40px] p-5 text-2xl ">
        <div className="sm:text-xl text-lg font-semibold text-stone-700 mx-auto p-0 h-fit   pb-1 w-full">
          Unconfirmed Employees
        </div>
        <div className=" overflow-y-scroll scroll">
          {dataEmpFiltered.map((item) => (
            <UnconfirmEmp key={item.id} item={item.name} />
          ))}
        </div>
      </span>
    </>
  );
}

export default CustomedOutEmp;
