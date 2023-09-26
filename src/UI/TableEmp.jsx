import Employee from "../UI/Employee";
import Loader from "./Loader";

import Empty from "./Empty";
import ErrorFetch from "./ErrorFetch";
import { useConFast } from "../context/ContextProject";
import { useSearchParams } from "react-router-dom";

function TableEmp() {
  const {
    isLoading,
    isError,
    dataEmp: employees,
    Change,
    page,
    pageSize,
    setLastPage,
  } = useConFast();
  const [searchParams] = useSearchParams();
  Change("employees");
  ////////////// 1.filter
  const filterUrl = searchParams.get("filterBy");
  let filteredData = employees;
  if (filterUrl === "confirmed") {
    filteredData = employees.filter((item) => item.confirm);
  } else if (filterUrl === "up5000$") {
    filteredData = employees.filter((item) => item.salary > 5000);
  } else {
    filteredData = employees;
  }
  ///////////////////// 2.sort
  const sortUrl = searchParams.get("sortBy");
  let sortedData = filteredData;
  if (sortUrl === "salaryup") {
    sortedData = filteredData.sort(
      (a, b) => Number(a.salary) - Number(b.salary)
    );
  } else if (sortUrl === "salarydown") {
    sortedData = filteredData.sort(
      (a, b) => -Number(a.salary) + Number(b.salary)
    );
  } else {
    sortedData = filteredData;
  }
  /////////////////////////////////
  //////////////// 3.pagination
  const pagData = sortedData.slice((page - 1) * pageSize, page * pageSize);
  if (filteredData.length < employees.length) {
    setLastPage(Math.floor(filteredData.length / 6) + 1);
  }

  ///////////////////// conditions
  if (isLoading) return <Loader />;
  if (isError) return <ErrorFetch />;
  if (sortedData.length === 0) return <Empty item="employee" />;

  return (
    <div className="text-center mx-4 md:mt-16 mt-8 md:text-base text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-gray-500">
      {pagData.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
}

export default TableEmp;
