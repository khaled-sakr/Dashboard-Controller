import { useEffect, useState } from "react";
import { useEmployees } from "../data/getEmployees";
import { findAll } from "../services/apiEmployees";
import Employee from "../UI/Employee";
import Empty from "./Empty";
import Loader from "./Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import { useQuery } from "@tanstack/react-query";

function TableEmp() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const q = query(collection(db, "employees"));
    setIsLoading(true);
    onSnapshot(q, (QuerySnapshot) => {
      const data = [];
      QuerySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setEmployees(data);
      setIsLoading(false);
    });
  }, []);
  console.log(employees);
  // const { data: employees } = useQuery("data", () => {});

  if (isLoading) return <Loader />;
  // if (error) console.error(error);
  // if (employees.length === 0) return <Empty item="employee" />;

  return (
    <div className="text-center mx-4 mt-6 md:mt-20 md:text-xl text-[8px] xs:text-[10px] sm:text-sm font-normal sm:font-semibold text-stone-600">
      {employees.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
}

export default TableEmp;
