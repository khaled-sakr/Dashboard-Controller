import { useState } from "react";
import { useConFast } from "../context/ContextProject";
import { useOutsideClick } from "../context/OutSideClick";

function ThreeDot({ id, type }) {
  const [openOption, setOpenOption] = useState(false);
  const { deleteItem } = useConFast();
  const ref = useOutsideClick(() => setOpenOption(false));
  return (
    <span ref={ref}>
      <button
        className="cursor-pointer"
        onClick={() => {
          setOpenOption(!openOption);
        }}
      >
        •••
      </button>
      {openOption && (
        <div className="absolute sm:right-4 md:-top-[60px] sm:-top-10 -top-7 right-0  bg-vanilla-600 text-vanilla-100 rounded-lg  after:bg-slate-300 after:h-3 after:w-3 after:right-4">
          <button className="block m-auto hover:bg-vanilla-400 sm:w-40 w-20 ">
            edit
          </button>
          <button
            onClick={() => {
              deleteItem(type, id);
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
