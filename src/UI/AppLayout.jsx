import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <div
      className="grid grid-rows-9 grid-cols-12 bg-vanilla-400 min-h-screen max-h-full
    min-w-full max-w-max "
    >
      <Sidebar />
      <div className="relative col-span-9 md:col-span-10 row-span-8 rounded-s-[100px] rounded-e-[50px] bg-vanilla-200 shad overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;

/////
//////md:col-span-2  col-span-3 row-span-1 md:row-span-6
