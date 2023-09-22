import { useForm } from "react-hook-form";
import { useOutsideClick } from "../context/OutSideClick";
import Button from "./Button";
import ErrorInput from "./ErrorInput";
import { useConFast } from "../context/ContextProject";
const styleInput =
  " w-[90%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-1 xs:py-2 outline-none ";
const label =
  " xs:w-[20%] w-[25%]  md:text-lg text-sm sm:text-base md:font-bold font-base xs:font-semibold mb-1 xs:mb-0";
const container = " flex flex-col sm:flex-row space-y-0 text-stone-800";

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
    <div className="overlay overflow-scroll scroll">
      <div
        ref={ref}
        className="lg:w-[60%] w-[80%] bg-vanilla-500 opacity-95 rounded-3xl p-16 h-fit mx-auto mt-12 "
      >
        <Button
          onClick={() => setOpenedModal(() => false)}
          type="danger"
          addStyle=" -mt-5 -mr-4 "
        >
          X
        </Button>
        <div className="flex flex-col gap-10 my-16 justify-center ">
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
            <label className="text-xl sm:mr-10 mr-0 ">Confirmed</label>
            <input
              disabled={isLoading}
              className="w-10 xs:h-7 h-5 bg-red-500  "
              type="checkbox"
              {...register("confirm")}
            />
          </div>
        </div>
        <div className="py-5">
          <Button type="add" onClick={handleSubmit(onSubmit)}>
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
  );
}

export default Modal;
