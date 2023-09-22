import Employee from "../UI/Employee";
import Loader from "./Loader";

import Empty from "./Empty";
import ErrorFetch from "./ErrorFetch";
import { useConFast } from "../context/ContextProject";

function TableEmp() {
  const { isLoading, isError, data: employees, Change } = useConFast();
  //
  Change("employees");

  if (isLoading) return <Loader />;
  if (isError) return <ErrorFetch />;
  if (employees.length === 0) return <Empty item="employee" />;

  return (
    <div className="text-center mx-4 mt-6 md:mt-20 md:text-xl text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-stone-600">
      {employees.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
}

export default TableEmp;
