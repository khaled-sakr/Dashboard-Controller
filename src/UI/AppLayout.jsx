import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <div className="grid grid-rows-9 grid-cols-12 bg-vanilla-400 h-screen min-w-fit max-w-screen ">
      <Sidebar />
      <div className="col-span-9 md:col-span-10  row-span-8 row-start- rounded-s-[100px] rounded-e-3xl bg-vanilla-200 shad">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;

/////
//////md:col-span-2  col-span-3 row-span-1 md:row-span-6
