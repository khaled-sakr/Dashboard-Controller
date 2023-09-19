import CustomedOutput from "../UI/CustomedOutput";
import Graph from "../UI/Graph";
import Statis from "../UI/Statis";
function Dashboard() {
  return (
    <>
      <div className="md:grid flex gap-y-10 gap-x-20  flex-wrap   justify-items-center cols4 gap-2 sm:p-10 p-10">
        <Statis />
        <CustomedOutput />
      </div>
      <Graph />
    </>
  );
}

export default Dashboard;
