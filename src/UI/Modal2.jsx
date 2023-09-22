import { useState } from "react";
import Button from "./Button";
import { useOutsideClick } from "../context/OutSideClick";
import { useForm } from "react-hook-form";
import ErrorInput from "./ErrorInput";
import { useConFast } from "../context/ContextProject";
const styleInput =
  " w-[75%] ml-2 col-span-1 w-full rounded-md sm:px-9 px-2 py-1 xs:py-2 outline-none ";
const label =
  " xs:w-[20%] w-[25%]  md:text-lg text-sm sm:text-base md:font-bold font-base xs:font-semibold mb-1 xs:mb-0";
const container = " flex flex-col sm:flex-row space-y-0 text-stone-800";
function Modal2({ setOpenedModal2 }) {
  const ref = useOutsideClick(() => setOpenedModal2(false));
  ////////////////////////
  const { AddItem, isLoading, currentData, updateItem } = useConFast();
  const defaltData = currentData;
  ////////////////////////////////
  const { register, formState, handleSubmit } = useForm({
    defaultValues: defaltData,
  });
  const { errors } = formState;
  ///////////////////////////////////////////
  const add = Boolean(currentData.length === 0);
  /////////////////////
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
      <div
        ref={ref}
        className="lg:w-[60%] w-[80%] bg-vanilla-500 opacity-95 rounded-3xl p-16 h-fit mx-auto mt-12 "
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
        <div className="flex flex-col gap-10 my-16 justify-center ">
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
          <Button type="add" onClick={handleSubmit(onSubmit)}>
            {add ? "Add" : "Edit"}
          </Button>
          <Button
            addStyle="hidden sm:block"
            type="danger"
            onClick={() => setOpenedModal2(false)}
          >
            Cancle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
