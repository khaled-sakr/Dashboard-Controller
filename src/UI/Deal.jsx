import ThreeDot from "./ThreeDot";

function Deal() {
// { deal }
  // const { company, dealer, benefit, phone, packages, date } = deal;
  return (
    <div className="grid grid-cols-13 md:my-16 my-9 items-center">
      {/* <span className="col-span-2 border-r border-vanilla-400">{company}</span>
      <span className="col-span-2 border-r border-vanilla-400">{date}</span>
      <span className="col-span-2 border-r border-vanilla-400">{dealer}</span>
      <span className="col-span-2 border-r border-vanilla-400">{packages}</span>
      <span className="col-span-2 border-r border-vanilla-400">{benefit}</span>
      <span className="col-span-2 ">{phone}</span> */}
      <span className="col-span-1 mx-auto ml-4 relative">
        <ThreeDot />
      </span>
    </div>
  );
}

export default Deal;
