import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { useConFast } from "../context/ContextProject";
// import { useEffect } from "react";
function Pagination({ type }) {
  const { lastPageInc, lastPageEmp, pageEmp, pageInc, setPageInc, setPageEmp } =
    useConFast();
  const [searchParams, setSearchParams] = useSearchParams();

  /////////////////
  // useEffect(() => {
  //   if (page > lastPage) {
  //     setPage(1);
  //   }
  // });
  // const page = pageEmp || pageInc;
  function nextFun() {
    setSearchParams(searchParams);
    if (type === "employees") {
      if (pageEmp > 0) {
        setPageEmp((page) => page + 1);
        searchParams.set("page", pageEmp + 1);
      }
    } else {
      if (pageInc > 0) {
        setPageInc((page) => page + 1);
        searchParams.set("page", pageInc + 1);
      }
    }
    // if (page > 0) {
    //   setPage((page) => page + 1);
    //   searchParams.set("page", page + 1);
    //   setSearchParams(searchParams);
    // }
    setSearchParams(searchParams);
  }

  function prevFun() {
    if (type === "employees") {
      if (pageEmp > 0) {
        setPageEmp((page) => page - 1);
        searchParams.set("page", pageEmp - 1);
      }
      pageEmp === 2 && searchParams.delete("page");
    } else {
      if (pageInc > 0) {
        setPageInc((page) => page - 1);
        searchParams.set("page", pageInc - 1);
      }
      pageInc === 2 && searchParams.delete("page");
    }
    setSearchParams(searchParams);
  }
  return (
    <div className="md:text-xl text-xs float-left sm:ml-32 xs:ml-10 ml-10 md:mt-10 mt-5 mb-6 text-gray-600 ">
      <Button
        disabled={type === "employees" ? pageEmp === 1 : pageInc === 1}
        type="pag"
        onClick={prevFun}
      >
        <BsArrowLeftSquare />
      </Button>
      <span className="text-center items-center text-sm  sm:text-lg xs:text-base sm:px-4 xs:px-2 px-0 xs:mx-2 mx-1 sm:py-1 py-0 rounded-full sm:font-semibold font-normal ">
        page {type === "employees" ? pageEmp : pageInc} from{" "}
        {type === "employees" ? lastPageEmp : lastPageInc}
      </span>

      <Button
        type="pag"
        disabled={
          type === "employees"
            ? pageEmp === lastPageEmp
            : pageInc === lastPageInc
        }
        onClick={nextFun}
      >
        <BsArrowRightSquare />
      </Button>
    </div>
  );
}

export default Pagination;
