import { useSearchParams } from "react-router-dom";

function Sort({ withData, addStyle }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  // if (sortBy === "all") {
  //   searchParams.set("sortBy", "");
  //   setSearchParams(searchParams);
  // }

  // setSearchParams(searchParams);

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <select
        className={` cursor-pointer float-right bg-vanilla-600 hover:bg-vanilla-700 smd:text-xl text-xs  font-semibold xs:ml-6 ml-2 xs:mr-9 mr-3 mt-[20px] rounded-lg  p-2  text-vanilla-100 outline-none shad text-center ${addStyle}`}
        value={sortBy}
        onChange={handleChange}
      >
        <option value="normal">normal</option>

        {withData === "employees" ? (
          <>
            <option value="salaryup">Salary(up)</option>
            <option value="salarydown">Salary(down)</option>
          </>
        ) : (
          <>
            <option value="date">date</option>
            <option value="benefitup">benefit(up)</option>
            <option value="benefitdown">benefit(down)</option>
          </>
        )}
      </select>
    </>
  );
}

export default Sort;
