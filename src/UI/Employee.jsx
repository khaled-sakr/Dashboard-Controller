import ThreeDot from "./ThreeDot";
function Employee({ employee }) {
  const { job, confirm, name, hour, phone, salary, id } = employee;
  return (
    <div className="grid grid-cols-12 md:my-16 my-9 items-center">
      <span className="col-span-2 border-r border-vanilla-400">{job}</span>
      <span className="col-span-2 border-r border-vanilla-400">
        {confirm ? "yes" : "no"}
      </span>
      <span className="col-span-2 border-r border-vanilla-400">{name}</span>
      <span className="col-span-1 border-r border-vanilla-400">{hour}</span>
      <span className="col-span-2 border-r border-vanilla-400">{salary}</span>
      <span className="col-span-2">{phone}</span>
      <span className="col-span-1 mx-auto ml-4 relative">
        <ThreeDot type="employees" idItem={id} />
      </span>
    </div>
  );
}

export default Employee;
