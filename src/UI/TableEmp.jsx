import Employee from "../UI/Employee";
import Loader from "./Loader";

import Empty from "./Empty";
import ErrorFetch from "./ErrorFetch";
import { useConFast } from "../context/ContextProject";
import { useSearchParams } from "react-router-dom";

function TableEmp() {
  const { isLoading, isError, data: employees, Change } = useConFast();
  const [searchParams] = useSearchParams();
  ///////////////////
  // const [searchParams] = useSearchParams();
  Change("employees");

  ///////////////////////////////////////////////////////////////////
  ////////////// 1.filter
  const filterUrl = searchParams.get("filterBy");
  // console.log(filterUrl);
  let filteredData = [];
  if (filterUrl === "confirmed") {
    filteredData = employees.filter((item) => item.confirm);
  } else if (filterUrl === "up5000$") {
    filteredData = employees.filter((item) => item.salary > 5000);
  } else {
    filteredData = employees;
  }
  ///////////////////// 2.sort
  const sortUrl = searchParams.get("sortBy");
  let finalData = [];
  if (sortUrl === "salaryup") {
    finalData = filteredData.sort((a, b) => a.salary - b.salary);
  } else if (sortUrl === "salarydown") {
    finalData = filteredData.sort((a, b) => -a.salary + b.salary);
  } else {
    finalData = filteredData;
  }
  // const [searchParams] = useSearchParams();
  // const filterBy = searchParams.get("filterBy");
  // ////////////////
  // if (filterBy === "confirmed") {
  //   setdata(employees.filter((employee) => employee.confirm));
  // }///////////////////////////////////////////////////////////////
  // const filterValue = searchParams.get("discount") || "all";

  // let filteredCabins;
  // if (filterValue === "all") filteredCabins = cabins;
  // if (filterValue === "no-discount")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  // if (filterValue === "with-discount")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // // 2) SORT
  // const sortBy = searchParams.get("sortBy") || "startDate-asc";
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedCabins = filteredCabins.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

  if (isLoading) return <Loader />;
  if (isError) return <ErrorFetch />;
  if (employees.length === 0) return <Empty item="employee" />;

  return (
    <div className="text-center mx-4 mt-6 md:mt-20 md:text-xl text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-stone-600">
      {finalData.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
}

export default TableEmp;
