import ThreeDot from "./ThreeDot";
function Employee({ employee }) {
  const { jobTitle, confirm, name, hour, phone, salary } = employee;

  return (
    <div className="grid grid-cols-12 md:my-16 my-9 items-center">
      <span className="col-span-2 border-r border-vanilla-400">{jobTitle}</span>
      <span className="col-span-2 border-r border-vanilla-400">{confirm}</span>
      <span className="col-span-2 border-r border-vanilla-400">{name}</span>
      <span className="col-span-1 border-r border-vanilla-400">{hour}</span>
      <span className="col-span-2 border-r border-vanilla-400">{salary}</span>
      <span className="col-span-2">{phone}</span>
      <span className="col-span-1 mx-auto ml-4 relative">
        <ThreeDot />
      </span>
    </div>
  );
}

export default Employee;
