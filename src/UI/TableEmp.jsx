import Employee from "../UI/Employee";
import Loader from "./Loader";

import Empty from "./Empty";
import { useLoadError } from "../context/LoadingErrorCon";
import ErrorFetch from "./ErrorFetch";
import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firebase";

function TableEmp() {
  const {
    isLoading,
    setIsLoading,
    checkLine,
    isError,
    data: employees,
    setdata,
  } = useLoadError();
  //
  useEffect(() => {
    const q = query(collection(db, "employees"));
    setIsLoading(true);
    onSnapshot(q, (QuerySnapshot) => {
      const data = [];
      QuerySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setdata(data);
      setIsLoading(false);
    });
  }, [setIsLoading, setdata]);
  checkLine();
  if (isLoading) return <Loader />;
  if (isError) return <ErrorFetch />;
  if (employees.length === 0) return <Empty item="employee" />;

  return (
    <div className="text-center mx-4 mt-6 md:mt-20 md:text-xl text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-stone-600">
      {employees.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
}

export default TableEmp;
