import { useEffect, useState } from "react";
import { useConFast } from "../context/ContextProject";
import { useOutsideClick } from "../context/OutSideClick";

function ThreeDot({ idItem, type }) {
  const [openOption, setOpenOption] = useState(false);
  const {
    deleteItem,
    Change,
    data,
    setCurrentData,
    setOpenedModal2,
    setOpenedModal,
    setCurrentId,
  } = useConFast();

  //////////////// upload current data
  Change(type);
  const newData = data.find((item) => item.id === idItem);
  //////////////
  function editFun() {
    setCurrentData(newData);
    setCurrentId(idItem);
    if (type === "employees") {
      setOpenedModal(true);
    } else if (type === "incomes") {
      setOpenedModal2(true);
    }
  }
  const ref = useOutsideClick(() => setOpenOption(false));
  return (
    <span ref={ref}>
      <button
        className="cursor-pointer"
        onClick={() => {
          setOpenOption(true);
        }}
      >
        •••
      </button>
      {openOption && (
        <div className="absolute sm:right-4 md:-top-[60px] sm:-top-10 -top-7 right-0  bg-vanilla-600 text-vanilla-100 rounded-lg  after:bg-slate-300 after:h-3 after:w-3 after:right-4">
          <button
            className="block m-auto hover:bg-vanilla-400 sm:w-40 w-20"
            onClick={editFun}
          >
            edit
          </button>
          <button
            onClick={() => {
              deleteItem(type, idItem);
              setOpenOption(false);
            }}
            className="block m-auto hover:bg-vanilla-400 sm:w-40 w-20 "
          >
            delete
          </button>
        </div>
      )}
    </span>
  );
}

export default ThreeDot;
