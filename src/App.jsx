import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AppLayout from "./UI/AppLayout";
import Error from "./Ui/Error";
import Incomes from "./pages/Incomes";
import { ContextProject } from "./context/ContextProject";
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
    <ContextProject>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ContextProject>
  );
}

export default App;
