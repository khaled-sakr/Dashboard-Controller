import { RiHandHeartFill } from "react-icons/ri";
import { FaIceCream } from "react-icons/fa6";
// import { useConFast } from "../context/ContextProject";
function Statistics() {
  return (
    <div className="mb-4">
      <>
        <span className=" shad flex p-2 flex-col  text-center w-72 h-52 mr-2  bg-gray-400 rounded-3xl mb-6 ">
          <span className="rounded-full  text-3xl  p-2  mx-auto text-stone-300 bg-green-400">
            <RiHandHeartFill />
          </span>
          <span className="text-sm text-stone-200 my-auto ml-3 border-t ">
            Total Incomes
            <div className="text-3xl">1200$</div>
          </span>
        </span>
      </>
    </div>
  );
}

export default Statistics;
