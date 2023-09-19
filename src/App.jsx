import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AppLayout from "./UI/AppLayout";
import Error from "./Ui/Error";
import Incomes from "./pages/Incomes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
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
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </QueryClientProvider>
    </div>
  );
}

export default App;
