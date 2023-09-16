const selectPage =
  "after:absolute  after:bg-vanilla-200 md:after:w-[28px] after:w-7 md:after:h-[70px] after:h-[62px] sm:after:h-[66px] md:after:-right-3 after:-right-[12px] after:top-2 ";
const baseButton =
  "relative  px-0 sm:mx-2 mx-0 rounded-[40px] md:px-6 py-8 text-stone-900 sm:font-semibold font-medium bg-vanilla-200 mt-12 shad";

function Button({ child, select }) {
  return (
    <div
      className={` ${baseButton} ${select && selectPage}
    `}
    >
      {child}
    </div>
  );
}

export default Button;

// const page =
//   " active:after:absolute active:after after:bg-vanilla-200 after:text-vanilla-100 md:after:w-[28px] after:w-5 md:after:h-[72px]  sm:after:after:h-[64px] md:after:-right-3 after:-right-[6px] after:-top-0";
