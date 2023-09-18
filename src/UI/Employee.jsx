import ThreeDot from "./ThreeDot";
const employee = {
  JobTitle: "Sales",
  confirmed: "yes",
  fullName: "khaled sakr",
  hourswork: 8,
  phoneNum: "201028577310",
  salary: 6000,
};
const { JobTitle, confirmed, fullName, hourswork, phoneNum, salary } = employee;
function Employee() {
  return (
    <div className="grid grid-cols-12 md:my-16 my-9 items-center">
      <span className="col-span-2 border-r border-vanilla-400">{JobTitle}</span>
      <span className="col-span-2 border-r border-vanilla-400">
        {confirmed}
      </span>
      <span className="col-span-2 border-r border-vanilla-400">{fullName}</span>
      <span className="col-span-1 border-r border-vanilla-400">
        {hourswork}
      </span>
      <span className="col-span-2 border-r border-vanilla-400">{salary}</span>
      <span className="col-span-2">{phoneNum}</span>
      <span className="col-span-1 mx-auto ml-4 relative">
        <ThreeDot />
      </span>
    </div>
  );
}

export default Employee;
