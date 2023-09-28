import Button from "./Button";
import { useOutsideClick } from "../context/OutSideClick";
import { useForm } from "react-hook-form";
import ErrorInput from "./ErrorInput";
import { useConFast } from "../context/ContextProject";
const styleInput =
  " w-[70%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-0 xs:py-[2px] outline-none ";
const label =
  " xs:w-[20%] w-[25%]  md:text-base text-xs sm:text-sm md:font-bold font-base xs:font-semibold mb-1 xs:mb-0";
const container = " flex flex-col  xs:flex-row text-stone-800";
function Modal2({ setOpenedModal2 }) {
  const ref = useOutsideClick(() => setOpenedModal2(false));
  const { AddItem, isLoading, currentData, updateItem } = useConFast();
  const defaltData = currentData;
  const { register, formState, handleSubmit } = useForm({
    defaultValues: defaltData,
  });
  const { errors } = formState;
  const add = Boolean(currentData.length === 0);
  function onSubmit(data) {
    if (add) {
      AddItem(data, "incomes");
    } else {
      updateItem(data, "incomes");
    }
    setOpenedModal2(false);
  }
  return (
    <div className={`overlay overflow-scroll scroll`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
        className="xl:w-[60%] w-[80%] bg-stone-300 opacity-95 rounded-3xl px-12 py-10  h-fit mx-auto mt-8 mb-8 "
      >
        <div className="pb-9">
          <Button
            type="danger"
            addStyle=" -mt-5 -mr-4 "
            onClick={() => setOpenedModal2(false)}
          >
            X
          </Button>
        </div>
        <div className="flex flex-col gap-8 mt-14 mb-4 justify-center ">
          <div className={container}>
            <label className={label}>Company</label>

            <input
              type="text"
              disabled={isLoading}
              className={`${styleInput}`}
              placeholder={`please enter your company...`}
              {...register("company", { required: "the company is required" })}
            />
            <ErrorInput message={errors?.company?.message} />
          </div>
          <div className={container}>
            <label className={label}>Dealer</label>

            <input
              type="text"
              disabled={isLoading}
              placeholder={`please enter your dealer...`}
              className={styleInput}
              {...register("dealer", {
                required: "the dealer is required",
              })}
            />
            <ErrorInput message={errors?.dealer?.message} />
          </div>
          <div className={container}>
            <label className={label}>Package</label>
            <input
              disabled={isLoading}
              className={styleInput}
              type="number"
              placeholder={`please enter your package...`}
              {...register("packages", { required: "the package is required" })}
            />
            <ErrorInput message={errors?.packages?.message} />
          </div>
          <div className={container}>
            <label className={label}>Benefit</label>
            <input
              disabled={isLoading}
              className={styleInput}
              type="number"
              placeholder={`please enter your benefit...`}
              {...register("benefit", {
                required: "the benefit is required",
              })}
            />
            <ErrorInput message={errors?.benefit?.message} />
          </div>
          <div className={container}>
            <label className={label}>Phone</label>
            <input
              disabled={isLoading}
              className={styleInput}
              type="number"
              placeholder="please enter your phone..."
              {...register("phone", {
                required: "the phone is required",
              })}
            />
            <ErrorInput message={errors?.phone?.message} />
          </div>
          <div className={container}>
            <label className={label}>Date</label>
            <input
              disabled={isLoading}
              className={styleInput}
              type="date"
              {...register("date", { required: "the date is required" })}
            />
            <ErrorInput message={errors?.date?.message} />
          </div>
        </div>
        <div className="py-5">
          <input
            type="submit"
            className="cursor-pointer text-stone-100 text-center float-right text-xs sm:text-base md:text-lg bg-sky-900 hover:bg-sky-950 sm:font-semibold font-base shad px-6 sm:py-[2.5px] py-1 rounded-md   font-base shad"
            value={add ? "Add" : "Edit"}
          />
          {/* <Button
            type="add"
            onClick={handleSubmit(onSubmit)}
            addStyle="px-6 sm:py-[2.5px] py-1 rounded-md"
          >
            {add ? "Add" : "Edit"}
          </Button> */}
          <Button
            addStyle="hidden sm:block"
            type="danger"
            onClick={() => setOpenedModal2(false)}
          >
            Cancle
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Modal2;
