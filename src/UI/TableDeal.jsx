import Deal from "./Deal";
import Empty from "./Empty";
import Loader from "./Loader";
import { useConFast } from "../context/ContextProject";
import ErrorFetch from "./ErrorFetch";
import { useSearchParams } from "react-router-dom";
// import { useEffect } from "react";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { db } from "../services/firebase";
////////

function TableDeal() {
  const { isLoading, isError, data: deals, Change, today } = useConFast();
  const [searchParams] = useSearchParams();
  Change("incomes");
  /////////////// 1.filter
  const filterUrl = searchParams.get("filterBy");
  let filteredData = [];
  if (filterUrl === "today") {
    filteredData = deals.filter((item) => item.date === today);
  } else {
    filteredData = deals;
  }
  ///////////////////// 2.sort
  const sortUrl = searchParams.get("sortBy");
  let finalData = filteredData;
  if (sortUrl === "date") {
    finalData = filteredData.sort(
      (a, b) =>
        Number(a.date.replace("-", "").replace("-", "")) -
        Number(b.date.replace("-", "").replace("-", ""))
    );
  } else if (sortUrl === "benefitup") {
    finalData = filteredData.sort((a, b) => a.benefit - b.benefit);
  } else if (sortUrl === "benefitdown") {
    finalData = filteredData.sort((a, b) => +b.benefit - a.benefit);
  } else {
    finalData = filteredData;
  }

  if (isLoading) return <Loader />;
  if (isError) return <ErrorFetch />;
  if (deals.length === 0) return <Empty item="deal" />;
  return (
    <div className="text-center mx-4 md:mt-20 -mt-10 md:text-xl text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-stone-600">
      {finalData.map((deal) => (
        <Deal deal={deal} key={deal.id} />
      ))}
    </div>
  );
}

export default TableDeal;
