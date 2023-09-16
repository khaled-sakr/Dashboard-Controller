import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="md:col-span-2  col-span-3 row-span-1  md:text-base text-xs text-center p-1 sm:text-sm bg-vanilla-600 ">
      <ul className="pages">
        <li>
          <Link to="/">
            <img
              src="public\images\photo_2023-09-15_15-43-25.jpg"
              alt="vanilla.jpg"
              className="rounded-full max-w-full  sm:block hidden  pl-0 sm:pl-auto after:rounded-full"
            />
          </Link>
        </li>

        <li>
          <Link to="/">
            <Button child="Dashboard" select={pathname === "/"} />
          </Link>
        </li>
        <li>
          <Link to="/employees">
            <Button child="Employees" select={pathname === "/employees"} />
          </Link>
        </li>
        <li>
          <Link to="/incomes">
            <Button child="Incomes" select={pathname === "/incomes"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

//  after:w-5 sm:hover:w-9 after:h-10 sm:after:h-[52px] after:-right-3 sm:after:-right-7 after:top-0 hover:after:block after:hidden sm:text-base text-xs
