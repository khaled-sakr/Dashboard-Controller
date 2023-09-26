import { AiFillHome } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="md:col-span-2 col-span-3 row-span-1  md:text-xl text-md  text-center pt-6 bg-stone-300 md:w-24  sm:w-20 w-14  ">
      <ul>
        <li>
          {/* <Link to="/">
            <img
              src="../images/photo_2023-09-15_15-43-25.jpg"a
              alt="vanilla.jpg"
              className="rounded-full invisible max-w-full  pl-0 sm:pl-auto after:rounded-full"
            />
          </Link> */}
        </li>

        <li>
          <Link to="/">
            <Button type="normal" select={pathname === "/"}>
              <AiFillHome />
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/employees">
            <Button type="normal" select={pathname === "/employees"}>
              <MdEngineering />
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/incomes">
            <Button
              children="Incomes"
              type="normal"
              select={pathname === "/incomes"}
            >
              <GiMoneyStack />
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

//  after:w-5 sm:hover:w-9 after:h-10 sm:after:h-[52px] after:-right-3 sm:after:-right-7 after:top-0 hover:after:block after:hidden sm:text-base text-xs
