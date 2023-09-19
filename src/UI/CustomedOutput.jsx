import TodayDeal from "./TodayDeal";
import UnconfirmEmp from "./UnconfirmEmp";

function CustomedOutput() {
  return (
    <>
      <span className="flex flex-col md:m-0 m-auto text-center 4xl:w-[720px] 3xl:w-[550px] 2xl:w-[540px] xl:w-[520px] lg:w-[600px] w-[500px] h-[280px] bg-gradient-to-b from-vanilla-500 to-vanilla-700  rounded-lg p-5">
        <div className="sm:text-2xl text-lg  font-semibold text-vanilla-200 mx-auto p-0 h-fit  border-b-vanilla-700 pb-3 border-b-[3px] w-full ">
          All Deal Today
        </div>
        <div className=" overflow-y-scroll scroll">
          <TodayDeal />
          <TodayDeal />
          <TodayDeal />
          <TodayDeal />
          <TodayDeal />
        </div>
      </span>
      <span className="flex flex-col md:m-0 m-auto text-center 4xl:w-[720px] 3xl:w-[550px] 2xl:w-[540px] xl:w-[520px] lg:w-[600px] w-[500px] h-[280px] bg-gradient-to-b from-vanilla-500 to-vanilla-700  rounded-lg p-5 text-2xl ">
        <div className="sm:text-2xl text-lg font-semibold text-vanilla-200 mx-auto p-0 h-fit  border-b-vanilla-700 pb-3 border-b-[3px] w-full">
          Unconfirmed Employees
        </div>
        <div className=" overflow-y-scroll scroll">
          <UnconfirmEmp />
          <UnconfirmEmp />
          <UnconfirmEmp />
          <UnconfirmEmp />
        </div>
      </span>
    </>
  );
}

export default CustomedOutput;
