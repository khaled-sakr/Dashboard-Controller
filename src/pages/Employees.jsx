import { useState } from "react";
import Button from "../UI/Button";
import Sort from "../UI/Sort";
import Filter from "../UI/Filter";
import Modal from "../UI/Modal";
import Pagination from "../UI/Pagination";
import TableEmp from "../UI/TableEmp";
function Employees() {
  const [openedModal, setOpenedModal] = useState(false);
  return (
    <>
      <Sort addStyle="sm:px-2 px-0" />
      <Filter addStyle="sm:px-2 px-0" />

      <Modal setOpenedModal={setOpenedModal} openedModal={openedModal} />

      <div className="grid grid-cols-12 text-center mx-4 mt-20 xs:text-sm md:text-2xl text-[9px] sm:text-base  font-normal sm:font-semibold text-vanilla-700 ">
        <span className="col-span-2 border-r border-vanilla-400">
          Job Title
        </span>
        <span className="col-span-2 border-r border-vanilla-400">Confirm</span>
        <span className="col-span-2 border-r border-vanilla-400">Name</span>
        <span className="col-span-1 border-r border-vanilla-400 px-auto">
          Hour
        </span>
        <span className="col-span-2 border-r border-vanilla-400">Salary</span>
        <span className="col-span-2 ">Phone</span>
      </div>
      <TableEmp />
      <div className="mr-6">
        <Button onOpenedModal={() => setOpenedModal(true)} type="add">
          Add Employee
        </Button>
        <Pagination />
      </div>
    </>
  );
}

export default Employees;
