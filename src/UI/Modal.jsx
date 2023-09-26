import { useForm } from "react-hook-form";
import { useOutsideClick } from "../context/OutSideClick";
import Button from "./Button";
import ErrorInput from "./ErrorInput";
import { useConFast } from "../context/ContextProject";
const styleInput =
  " w-[70%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-0 xs:py-[2px] outline-none text-stone-600";
const label =
  " xs:w-[20%] w-[25%]  md:text-base text-xs sm:text-sm md:font-bold font-base xs:font-semibold mb-1 xs:mb-0";
const container = " flex flex-col  xs:flex-row text-stone-800";

function Modal({ setOpenedModal }) {
  const ref = useOutsideClick(() => setOpenedModal(false));
  /////////////////////////
  const { AddItem, isLoading, currentData, updateItem } = useConFast();
  const defaltData = currentData;
  /////////////////////
  const { register, formState, handleSubmit } = useForm({
    defaultValues: defaltData,
  });
  ////////////////////////////
  const { errors } = formState;
  ////////////////////
  const add = Boolean(currentData.length === 0);
  //////////////////////////

  function onSubmit(data) {
    if (add) {
      AddItem(data, "employees");
    } else {
      updateItem(data, "employees");
    }
    setOpenedModal(false);
  }

  return (
    <div className="overlay overflow-scroll scroll ">
      <div
        ref={ref}
        className="xl:w-[60%] w-[80%] bg-stone-300 opacity-95 rounded-3xl px-12 py-10  h-fit mx-auto mt-8 mb-8 "
      >
        <Button
          onClick={() => setOpenedModal(() => false)}
          type="danger"
          addStyle=" -mt-5 -mr-4 "
        >
          X
        </Button>
        <div className="flex flex-col gap-8 mt-14 mb-4 justify-center ">
          <div className={container}>
            <label className={label}>Job</label>

            <input
              type="text"
              disabled={isLoading}
              className={`${styleInput}`}
              placeholder={`Please Enter Your Job...`}
              {...register("job", { required: "the job is required" })}
            />
            <ErrorInput message={errors?.job?.message} />
          </div>
          <div className={container}>
            <label className={label}>Name</label>

            <input
              type="text"
              disabled={isLoading}
              placeholder={`Please Enter Your Name..`}
              className={styleInput}
              {...register("name", { required: "the name is required" })}
            />
            <ErrorInput message={errors?.name?.message} />
          </div>
          <div className={container}>
            <label className={label}>Hour</label>
            <input
              className={styleInput}
              type="number"
              disabled={isLoading}
              placeholder={`Please Enter Your Work  Hour...`}
              {...register("hour", { required: "the hour is required" })}
            />
            <ErrorInput message={errors?.hour?.message} />
          </div>
          <div className={container}>
            <label className={label}>Salary</label>
            <input
              className={styleInput}
              type="number"
              disabled={isLoading}
              placeholder={`Please Enter Your Salary...`}
              {...register("salary", { required: "the salary is required" })}
            />
            <ErrorInput message={errors?.salary?.message} />
          </div>
          <div className={container}>
            <label className={label}>Phone</label>
            <input
              className={styleInput}
              disabled={isLoading}
              type="number"
              placeholder={`Please Enter Your Phone...`}
              {...register("phone", { required: "the phone is required" })}
            />
            <ErrorInput message={errors?.phone?.message} />
          </div>
          <div
            className={`${container} xs:justify-start justify-between gap-5`}
          >
            <label className="md:text-xl text-md font-semibold sm:mr-10 mr-0 ">
              Confirmed
            </label>
            <input
              disabled={isLoading}
              className="xl:w-7 sm:w-5 w-4 xs:h-6 h-5 bg-red-500  "
              type="checkbox"
              {...register("confirm")}
            />
          </div>
          <div className="py-0">
            <Button
              type="add"
              addStyle="px-6 sm:py-[2.5px] py-1 rounded-md bg-sky-800 hover:bg-sky-900 "
              onClick={handleSubmit(onSubmit)}
            >
              {add ? "Add" : "Edit"}
            </Button>
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
    </div>
  );
}

export default Modal;
