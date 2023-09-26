import ThreeDot from "./ThreeDot";
function Employee({ employee }) {
  const { job, confirm, name, hour, phone, salary, id } = employee;
  return (
    <div className="grid grid-cols-12 md:mb-8 mb-5 text-gray-400 rounded-lg border-l-4 pr-1 border-sky-700 bg-white py-3 items-center">
      <span className="col-span-2 border-r border-blue-950">{job}</span>
      <span className="col-span-2 border-r border-blue-950">
        {confirm ? "yes" : "no"}
      </span>
      <span className="col-span-2 border-r border-blue-950">{name}</span>
      <span className="col-span-1 border-r border-blue-950">{hour} h</span>
      <span className="col-span-2 border-r border-blue-950">{salary} $</span>
      <span className="col-span-2">{phone}</span>
      <span className="col-span-1 mx-auto ml-4 relative">
        <ThreeDot type="employees" idItem={id} />
      </span>
    </div>
  );
}

export default Employee;
