import { useState } from "react";
import Button from "../UI/Button";
import Modal2 from "../UI/Modal2";
import Sort from "../UI/Sort";
import Filter from "../UI/Filter";
import Pagination from "../UI/Pagination";
import TableDeal from "../UI/TableDeal";

function Incomes() {
  const [openedModal2, setOpenedModal2] = useState(false);
  return (
    <>
      <Sort withData="1" addStyle="sm:px-9 px-3 xs:text-xs text-center" />
      <Filter withData="1" addStyle="sm:px-9 px-3 " />

      <Modal2 setOpenedModal2={setOpenedModal2} openedModal2={openedModal2} />

      <div className="grid grid-cols-13 text-center mx-4 my-20 xs:text-sm md:text-2xl text-[9px] sm:text-base  font-normal sm:font-semibold text-vanilla-700 ">
        <span className="col-span-2 border-r border-vanilla-400">Company</span>
        <span className="col-span-2 border-r border-vanilla-400">
          Deal Date
        </span>
        <span className="col-span-2 border-r border-vanilla-400">Dealer</span>
        <span className="col-span-2 border-r border-vanilla-400">package</span>

        <span className="col-span-2 border-r border-vanilla-400">benefit</span>
        <span className="col-span-2 ">Phone</span>
      </div>
      <TableDeal />
      <div className="mr-6">
        <Button onOpenedModal2={() => setOpenedModal2(true)} type="add">
          Add Deal
        </Button>
        <Pagination />
      </div>
    </>
  );
}

export default Incomes;
