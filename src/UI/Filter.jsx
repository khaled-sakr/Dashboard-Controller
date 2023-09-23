import { useSearchParams } from "react-router-dom";
import { useConFast } from "../context/ContextProject";

function Filter({ withData, addStyle }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setPage } = useConFast();
  const filterValue = searchParams.get("filterBy") || "";
  function filterBy(e) {
    setPage(1);
    searchParams.set("filterBy", e.target.value);
    e.target.value === "all" && searchParams.delete("filterBy");
    setSearchParams(searchParams);
  }
  return (
    <>
      <select
        className={` cursor-pointer float-right bg-vanilla-600 hover:bg-vanilla-700 smd:text-xl text-xs  font-semibold mt-[20px] rounded-lg py-2  text-vanilla-100 outline-none text-center shad ${
          addStyle && addStyle
        }`}
        onChange={filterBy}
        value={filterValue}
      >
        <option value="all">all</option>

        {withData === "employees" ? (
          <>
            <option value="confirmed">confirmed</option>
            <option value="up5000$">up 5000</option>
          </>
        ) : (
          <option value="today">today</option>
        )}
      </select>
    </>
  );
}

export default Filter;
