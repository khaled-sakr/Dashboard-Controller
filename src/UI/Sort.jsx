import { useSearchParams } from "react-router-dom";
import { useConFast } from "../context/ContextProject";

function Sort({ withData, addStyle }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const { setPageInc, setPageEmp } = useConFast();

  function handleChange(e) {
    setPageInc(1);
    setPageEmp(1);
    searchParams.set("sortBy", e.target.value);
    e.target.value === "normal" && searchParams.delete("sortBy");
    setSearchParams(searchParams);
  }

  return (
    <>
      <select
        className={` cursor-pointer float-right bg-sky-900 hover:bg-sky-950 smd:text-xl text-xs  font-semibold xs:ml-6 ml-2 xs:mr-9 mr-3 mt-[20px] rounded-lg  p-2  text-stone-100 outline-none shad text-center ${addStyle}`}
        value={sortBy || ""}
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
