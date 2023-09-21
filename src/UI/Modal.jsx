import Button from "./Button";
import Loader from "./Loader";
const styleInput =
  " w-[90%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-1 xs:py-2 outline-none ";
const label =
  " xs:w-[20%] w-[25%]  md:text-lg text-sm sm:text-base md:font-bold font-base xs:font-semibold mb-1 xs:mb-0";
const container = " flex   space-y-0 text-stone-800";

function Modal({ setOpenedModal, openedModal }) {
  return (
    <div className={`overlay ${!openedModal && "hiddenForm"}`}>
      <div className="sm:w-[90%] md:w-[50%] w-[100%] bg-vanilla-500 opacity-95 rounded-3xl p-16 h-fit mx-auto mt-12 ">
        <Button
          onClick={() => setOpenedModal(() => false)}
          type="danger"
          addStyle=" -mt-5 -mr-4 "
        >
          X
        </Button>
        <div className="flex flex-col gap-10 my-16 sm:font-semibold  font-normal justify-center ">
          <div className={container}>
            <label className={label}>Job</label>

            <input
              type="text"
              className={`${styleInput}`}
              placeholder={`Please Enter Your Job...`}
            />
          </div>
          <div className={container}>
            <label className={label}>Name</label>

            <input
              type="text"
              placeholder={`Please Enter Your Name..`}
              className={styleInput}
            />
          </div>
          <div className={container}>
            <label className={label}>Hour</label>
            <input
              className={styleInput}
              type="text"
              placeholder={`Please Enter Your Work  Hour...`}
            />
          </div>
          <div className={container}>
            <label className={label}>Salary</label>
            <input
              className={styleInput}
              type="text"
              placeholder={`Please Enter Your Salary...`}
            />
          </div>
          <div className={container}>
            <label className={label}>Phone</label>
            <input
              className={styleInput}
              type="text"
              placeholder={`Please Enter Your Phone...`}
            />
          </div>
          <div
            className={`${container} xs:justify-start justify-between gap-5`}
          >
            <label className="text-xl sm:mr-10 mr-0 ">Confirmed</label>
            <input className="w-10 xs:h-7 h-5 bg-red-500  " type="checkbox" />
          </div>
        </div>
        <div className="py-5">
          <Button type="add">Add</Button>
          <Button
            addStyle="hidden sm:block"
            type="danger"
            onClick={() => setOpenedModal(false)}
          >
            Cancle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
