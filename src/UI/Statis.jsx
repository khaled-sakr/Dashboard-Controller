import { RiHandHeartFill, RiHandCoinFill } from "react-icons/ri";
import { FaPeopleGroup, FaIceCream } from "react-icons/fa6";
function Statis() {
  return (
    <>
      <span className="flex md:m-0 m-auto text-center 4xl:w-[680px] 3xl:w-[450px] 2xl:w-[500px] xl:w-[480px] lg:w-[500px] w-[450px] md:h-[90px] sm:h-[80px] h-[60px] md:ml-2 bg-vanilla-600 rounded-xl ">
        <span className=" bg-green-900 rounded-full ml-5 md:text-6xl text-3xl p-2 my-auto text-vanilla-200 ">
          <RiHandHeartFill />
        </span>
        <span className="md:text-2xl sm:text-lg text-sm  text-vanilla-200 my-auto ml-3 ">
          Total Incomes 120000$
        </span>
      </span>

      <span className="flex md:m-0 m-auto text-center 4xl:w-[680px] 3xl:w-[450px] 2xl:w-[500px] xl:w-[480px] lg:w-[500px] w-[450px] md:h-[90px] sm:h-[80px] h-[60px] bg-vanilla-600 rounded-xl ">
        <span className=" bg-sky-950 rounded-full ml-5 md:text-6xl text-3xl p-2 my-auto text-vanilla-200 ">
          <FaPeopleGroup />
        </span>
        <span className="md:text-2xl sm:text-lg text-sm  text-vanilla-200 my-auto ml-3 ">
          Total Employees 48
        </span>
      </span>
      <span className="flex md:m-0 m-auto text-center 4xl:w-[680px] 3xl:w-[450px] 2xl:w-[500px] xl:w-[480px] lg:w-[500px] w-[450px] md:h-[90px] sm:h-[80px] h-[60px] bg-vanilla-600 rounded-xl ">
        <span className=" bg-red-900  rounded-full ml-5 md:text-6xl text-3xl p-2 my-auto text-vanilla-200 ">
          <RiHandCoinFill />
        </span>
        <span className="md:text-2xl sm:text-lg text-sm  text-vanilla-200 my-auto ml-3 ">
          Total Salaries 67000$
        </span>
      </span>
      <span className="flex md:m-0 m-auto text-center 4xl:w-[680px] 3xl:w-[450px] 2xl:w-[500px] xl:w-[480px] lg:w-[500px] w-[450px] md:h-[90px] sm:h-[80px] h-[60px] bg-vanilla-600 rounded-xl ">
        <span className=" bg-pink-900  rounded-full ml-5 md:text-6xl text-3xl p-2 my-auto text-vanilla-200 ">
          <FaIceCream />
        </span>
        <span className="md:text-2xl sm:text-lg text-sm  text-vanilla-200 my-auto ml-3 ">
          Total Pachages 6700
        </span>
      </span>
    </>
  );
}

export default Statis;
