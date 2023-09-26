import CustomedOutEmp from "../UI/CustomedOutEmp";
import CustomedOutInc from "../UI/CustomedOutInc";
import Graph from "../UI/Graph";
import StaticEmployees from "../UI/StaticEmployees";
// import StaticEmployees from "../UI/StaticEmployees";
import StaticIncomes from "../UI/StaticIncomes";
function Dashboard() {
  return (
    <>
      <div className="  md:flex grid  flex-wrap cols4 w-fit  ml-5 bg-transparent h-[98%] mt-3 pt-9 rounded-xl">
        <StaticIncomes />
        <StaticEmployees />
        <CustomedOutInc />
        <CustomedOutEmp />
        <Graph />
      </div>
    </>
  );
}

export default Dashboard;
