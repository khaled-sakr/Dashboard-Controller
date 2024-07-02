import { BsFillFileBarGraphFill, BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
function Header() {
  return (
    <div className="bg-sky-900 w-full top-0 left-0  h-[75px] bg-fixed p-2 ">
      <div className="w-full flex bg-stone-100 h-[60px] rounded-xl m-auto justify-between pl-9">
        <span className=" flex sm:text-5xl text-2xl my-auto text-sky-900 ">
          <BsFillFileBarGraphFill />
        </span>
        <a
          href="https://dashboard-next-cv.netlify.app/"
          className="text-center sm:text-sm text-[8px] sm:rounded-md rounded-sm my-auto font-semibold text-red-100 bg-sky-800 p-2 border-sky-700"
        >
          The same project but by next
        </a>
        <span className="flex gap-3 justify-end">
          <BiSearchAlt2 className="text-sky-900  m-auto sm:text-6xl text-2xl my-auto" />
          <input
            type="text"
            className="bg-slate-200 block outline-none px-6  m-auto text-sm w-full h-9 rounded-md "
          />
          <span className="sm:text-4xl text-2xl my-auto mr-9   text-gray-100 rounded-full bg-sky-900 p-1">
            <BsFillPersonFill />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;
