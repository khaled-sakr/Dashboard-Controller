import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AppLayout from "./UI/AppLayout";
import Error from "./Ui/Error";
import Incomes from "./pages/Incomes";
import { LoadingErrorCon } from "./context/LoadingErrorCon";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/employees", element: <Employees /> },
        { path: "/incomes", element: <Incomes /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
    <LoadingErrorCon>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </LoadingErrorCon>
  );
}

export default App;
