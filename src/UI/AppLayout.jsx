import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
function AppLayout() {
  return (
    <>
      <Header />
      <div
        className="flex bg-stone-100  min-h-screen max-h-full
      "
      >
        <Sidebar />
        <div className=" rounded-xl  w-10/12 mx-auto  bg-stone-100 overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
