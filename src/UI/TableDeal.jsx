import Deal from "./Deal";
import Empty from "./Empty";
import Loader from "./Loader";
import { useConFast } from "../context/ContextProject";
import ErrorFetch from "./ErrorFetch";
// import { useEffect } from "react";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { db } from "../services/firebase";

function TableDeal() {
  const { isLoading, isError, data: deal, Change } = useConFast();
  Change("incomes");

  if (isLoading) return <Loader />;
  if (isError) return <ErrorFetch />;
  if (deal.length === 0) return <Empty item="deal" />;
  return (
    <div className="text-center mx-4 md:mt-20 -mt-10 md:text-xl text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-stone-600">
      {deal.map((deal) => (
        <Deal deal={deal} key={deal.id} />
      ))}
    </div>
  );
}

export default TableDeal;
