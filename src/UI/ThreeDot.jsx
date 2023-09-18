import { useState } from "react";

function ThreeDot() {
  const [openOption, setOpenOption] = useState(false);
  return (
    <span>
      <button
        className="cursor-pointer"
        onClick={() => setOpenOption(!openOption)}
      >
        •••
      </button>
      {openOption && (
        <div className="absolute sm:right-4 md:-top-[60px] sm:-top-10 -top-7 right-0  bg-vanilla-600 text-vanilla-100 rounded-lg  after:bg-slate-300 after:h-3 after:w-3 after:right-4">
          <button className="block m-auto hover:bg-vanilla-400 sm:w-40 w-20 ">
            edit
          </button>
          <button className="block m-auto hover:bg-vanilla-400 sm:w-40 w-20 ">
            delete
          </button>
        </div>
      )}
    </span>
  );
}

export default ThreeDot;
