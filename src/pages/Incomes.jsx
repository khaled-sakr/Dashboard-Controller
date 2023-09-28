import Button from "../UI/Button";
import Modal2 from "../UI/Modal2";
import Sort from "../UI/Sort";
import Filter from "../UI/Filter";
import Pagination from "../UI/Pagination";
import TableDeal from "../UI/TableDeal";
import { useConFast } from "../context/ContextProject";

function Incomes() {
  const { openedModal2, setOpenedModal2, setCurrentData } = useConFast();
  return (
    <>
      <Sort withData="incomes" addStyle=" xs:text-xs text-center" />
      <Filter withData="incomes" addStyle="sm:px-9 px-3 " />

      {openedModal2 && (
        <Modal2 setOpenedModal2={setOpenedModal2} openedModal2={openedModal2} />
      )}

      <div className="grid grid-cols-13 text-center mx-4 mt-20 xs:text-sm md:text-xl text-[9px] sm:text-base font-normal sm:font-semibold text-stone-900 ">
        <span className="col-span-2 border-r border-gray-500">Company</span>
        <span className="col-span-2 border-r border-gray-500">Deal Date</span>
        <span className="col-span-2 border-r border-gray-500">Dealer</span>
        <span className="col-span-2 border-r border-gray-500">package</span>

        <span className="col-span-2 border-r border-gray-500">benefit</span>
        <span className="col-span-2 ">Phone</span>
      </div>
      <TableDeal type="incomes" />
      <div className="mr-6">
        <Button
          onClick={() => {
            setOpenedModal2(true);
            setCurrentData([]);
          }}
          type="add"
          addStyle=" mr-6 rounded-lg md:px-9 px-6 sm:py-2 py-1 sm:mr-4 mr-9 "
        >
          Add Deal
        </Button>
        <Pagination type="incomes" />
      </div>
    </>
  );
}

export default Incomes;
