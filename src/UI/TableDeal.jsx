import Deal from "./Deal";
import Empty from "./Empty";
import Loader from "./Loader";
import { useConFast } from "../context/ContextProject";
import ErrorFetch from "./ErrorFetch";
import { useSearchParams } from "react-router-dom";
import { useConData } from "../context/ContextFetchData";
import { useEffect } from "react";
// import { useEffect } from "react";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { db } from "../services/firebase";
////////

function TableDeal() {
  const {
    isLoading,
    isError,
    dataInc: deals,
    today,
    pageInc,
    pageSize,
    setLastPageInc,
  } = useConFast();
  const [searchParams] = useSearchParams();
  const { FetchIncomes } = useConData();
  FetchIncomes();
  /////////////// 1.filter
  const filterUrl = searchParams.get("filterBy");
  let filteredData = deals;
  if (filterUrl === "today") {
    filteredData = deals.filter((item) => item.date === today);
  } else {
    filteredData = deals;
  }
  ///////////////////// 2.sort
  const sortUrl = searchParams.get("sortBy");
  let sortedData = filteredData;
  if (sortUrl === "date") {
    sortedData = filteredData.sort(
      (a, b) =>
        -Number(a.date.replace("-", "").replace("-", "")) +
        Number(b.date.replace("-", "").replace("-", ""))
    );
  } else if (sortUrl === "benefitup") {
    sortedData = filteredData.sort((a, b) => a.benefit - b.benefit);
  } else if (sortUrl === "benefitdown") {
    sortedData = filteredData.sort((a, b) => +b.benefit - a.benefit);
  } else {
    sortedData = filteredData;
  }
  useEffect(() => {
    if (filteredData.length < deals.length) {
      setLastPageInc(Math.ceil(filteredData.length / 6));
    }
  });

  //////////////// 3.pagination
  const pagData = sortedData.slice(
    (pageInc - 1) * pageSize,
    pageInc * pageSize
  );

  ///////////////////// conditions
  if (isLoading) return <Loader />;
  if (isError) return <ErrorFetch />;
  if (deals.length === 0) return <Empty item="deal" />;
  return (
    <div className="text-center mx-4 md:mt-16 mt-8 md:text-base text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-gray-500 ">
      {pagData.map((deal) => (
        <Deal deal={deal} key={deal.id} />
      ))}
    </div>
  );
}

export default TableDeal;
