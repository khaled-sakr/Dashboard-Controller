const base =
  " w-[95%] float-right ml-9 relative cursor-pointer px-0 sm:mx-2 mx-0 rounded-[40px] md:px-6 py-8 md:font-bold font-semibold  mt-12 shad ";

const styles = {
  normal: base + " bg-vanilla-200 text-stone-900",
  select:
    " after:absolute  after:bg-vanilla-200 md:after:w-[28px] after:w-7 md:after:h-[70px] after:h-[62px] sm:after:h-[66px] md:after:-right-3 after:-right-[12px] after:top-2 shad",
  add: " mr-6  cursor-pointer rounded-xl bg-vanilla-800 text-vanilla-200 text-center float-right md:px-9 px-6 text-xs sm:text-base md:text-xl sm:py-2 py-2 sm:mr-4 mr-9 hover:bg-vanilla-700 sm:font-semibold font-base shad ",
  danger:
    "text-white text-xs sm:text-base md:text-xl rounded-xl border-red-300 sm:px-4 px-3 sm:py-2 py-[9px] bg-red-600 hover:bg-red-700 mx-2 float-right block font-semibold shad ",
  pag: "cursor-pointer md:mx-7 mx-0 xs:mx-2 sm:px-2  md:px-8 px-1 sm:py-1 md:py-2 sm:py-1 py-0 bg-vanilla-500 rounded-full  sm:text-lg text-normal hover:bg-vanilla-400 shad ",
};

function Button({
  children,
  addStyle,
  onClick,
  onOpenedModal,
  onClosedModal,
  onOpenedModal2,
  onClosedModal2,
  nextPage,
  prevPage,
  type,
  select,
}) {
  // function Click() {
  //   onOpenedModal2 && onOpenedModal2();
  //   onClosedModal2 && onClosedModal2();
  // }
  return (
    <button
      onClick={onClick}
      className={
        styles[type] + " " + (select && styles.select) + " " + addStyle
      }
    >
      {children}
    </button>
  );
}

export default Button;
