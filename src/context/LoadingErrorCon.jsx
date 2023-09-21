// import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
// import { db } from "../services/firebase";

//

const LoadingErrorContext = createContext();

//

function LoadingErrorCon({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setdata] = useState([]);
  function checkLine() {
    if (navigator.onLine) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }
  //
  // useEffect(() => {
  //   const q = query(collection(db, "incomes"));
  //   setIsLoading(true);
  //   onSnapshot(q, (QuerySnapshot) => {
  //     const data = [];
  //     QuerySnapshot.forEach((doc) => {
  //       data.push({ ...doc.data(), id: doc.id });
  //     });
  //     setdata(data);
  //     setIsLoading(false);
  //   });
  // }, [setIsLoading]);
  // if (!typeFetchedData) return null;

  return (
    <LoadingErrorContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        checkLine,
        data,
        setdata,
      }}
    >
      {children}
    </LoadingErrorContext.Provider>
  );
}
function useLoadError() {
  const context = useContext(LoadingErrorContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { LoadingErrorCon, useLoadError };
