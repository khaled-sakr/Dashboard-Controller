import { useState } from "react";
import Button from "./Button";
const styleInput =
  " w-[90%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-2 outline-none ";
const label =
  "  mr-7 2xl:w-[20%] w-[10%] md:text-lg text-normal sm:text-base md:font-bold font-base xs:font-semibold  mb-2 xs:mb-0";

//  xs:w-[20%] w-[25%]

const container = " flex flex-col xs:flex-row  space-y-0 text-stone-800";

function Modal2({ setOpenedModal2, openedModal2 }) {
  const [ddd, setDdd] = useState("");
  console.log(ddd);
  return (
    <div className={`overlay ${!openedModal2 && "hiddenForm"}`}>
      <div className="sm:w-[90%] smd:w-[50%] w-[100%]  bg-vanilla-500 opacity-95 rounded-3xl p-16 h-fit mx-auto xs:mt-12 mt-2 ">
        <div className="pb-9">
          <Button
            type="danger"
            addStyle=" -mt-5 -mr-4 "
            onClosedModal2={() => setOpenedModal2(() => false)}
          >
            X
          </Button>
        </div>
        <div className="flex flex-col gap-10 my-16 sm:font-semibold  font-normal justify-center ">
          <div className={container}>
            <label className={label}>Company</label>

            <input
              type="text"
              className={`${styleInput}`}
              placeholder={`Please Enter Your Company...`}
            />
          </div>
          <div className={container}>
            <label className={label}>Dealer</label>

            <input
              type="text"
              placeholder={`Please Enter Your Dealer..`}
              className={styleInput}
            />
          </div>
          <div className={container}>
            <label className={label}>Package</label>
            <input
              className={styleInput}
              type="text"
              placeholder={`Please Enter Your Work  Package...`}
            />
          </div>
          <div className={container}>
            <label className={label}>Revenues</label>
            <input
              className={styleInput}
              type="text"
              placeholder={`Please Enter Your Revenues...`}
            />
          </div>
          <div className={container}>
            <label className={label}>Date</label>
            <input
              className={styleInput}
              type="date"
              value={ddd}
              onChange={(e) => setDdd(e.target.value)}
            />
          </div>
        </div>
        <div className="py-5">
          <Button type="add">Add</Button>
          <Button
            addStyle="hidden sm:block"
            type="danger"
            onClosedModal2={() => setOpenedModal2(false)}
          >
            Cancle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
