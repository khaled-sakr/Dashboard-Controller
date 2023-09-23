import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { useConFast } from "../context/ContextProject";
function Pagination() {
  const { lastPage, page, setPage } = useConFast();
  const [searchParams, setSearchParams] = useSearchParams();

  /////////////////
  function nextFun() {
    setSearchParams(searchParams);
    if (page > 0) {
      setPage((page) => page + 1);
      searchParams.set("page", page + 1);
      setSearchParams(searchParams);
    }
    setSearchParams(searchParams);
  }

  function prevFun() {
    if (page > 1) {
      setPage((page) => page - 1);
      searchParams.set("page", page - 1);
      setSearchParams(searchParams);
      page === 2 && searchParams.delete("page");
    }
    setSearchParams(searchParams);
  }
  return (
    <div className="md:text-xl text-xs float-left sm:ml-32 xs:ml-20 ml-10 md:mt-20 mt-10 mb-6 ">
      <Button disabled={page === 1} type="pag" onClick={prevFun}>
        &larr;
      </Button>
      <span className="text-center  m-auto text-sm  sm:text-lg xs:text-base sm:px-4 xs:px-2 px-0 xs:mx-2 mx-1 sm:py-1 py-0 rounded-full sm:font-semibold font-normal ">
        page {page} from {lastPage}
      </span>

      <Button type="pag" disabled={page === lastPage} onClick={nextFun}>
        &rarr;
      </Button>
    </div>
  );
}

export default Pagination;
