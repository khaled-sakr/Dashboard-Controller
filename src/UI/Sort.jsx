import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Sort({ withData, addStyle }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.set("sortBy", sort);
  // setSearchParams("sortBy");

  // searchParams.set("sortBy", e.target.value);
  // setSearchParams(searchParams);
  //   const [searchParams, setSearchParams] = useSearchParams();
  // const sortBy = searchParams.get("sortBy") || "";
  function sortBy(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <select
        className={` cursor-pointer float-right bg-vanilla-600 hover:bg-vanilla-700 smd:text-xl text-xs  font-semibold xs:ml-6 ml-2 xs:mr-9 mr-3 mt-[20px] rounded-lg  p-2  text-vanilla-100 outline-none shad text-center ${addStyle}`}
        onChange={sortBy}
      >
        <option value={1}>All</option>

        {withData === "employees" ? (
          <>
            <option value={2}>Salary(up)</option>
            <option value={3}>Salary(down)</option>
          </>
        ) : (
          <option value={2}>Date</option>
        )}
      </select>
    </>
  );
}

export default Sort;
