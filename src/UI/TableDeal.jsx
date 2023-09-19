import { useEffect, useState } from "react";
import Deal from "./Deal";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firebase";
import Loader from "./Loader";

function TableDeal() {
  // const [deal, setDeal] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const q = query(collection(db, "incomes"));
  //   setIsLoading(true);
  //   onSnapshot(q, (QuerySnapshot) => {
  //     const data = [];
  //     QuerySnapshot.forEach((doc) => {
  //       data.push({ ...doc.data(), id: doc.id });
  //     });
  //     setDeal(data);
  //     setIsLoading(false);
  //   });
  // }, []);

  // console.log(deal);
  // const { data: deal } = useQuery("data", () => {});

  // if (isLoading) return <Loader />;
  // if (error) console.error(error);
  // if (deal.length === 0) return <Empty item="employee" />;

  return (
    <div className="text-center mx-4 md:mt-20 -mt-10 md:text-xl text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-stone-600">
      {/* {deal?.map((deal) => ( */}
      <Deal />
      {/* // deal={deal} key={deal.id} */}
      {/* ))} */}
    </div>
  );
}

export default TableDeal;
