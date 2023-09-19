import { useQuery } from "@tanstack/react-query";
import { findAll } from "../services/apiEmployees";

export function useEmployees() {
  const {
    data: employees,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: findAll,
  });
  console.log(employees);
  return { employees, isLoading, error };
}
