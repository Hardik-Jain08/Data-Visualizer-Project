import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { useEffect } from "react";
import DrawerAppBar from "./components/Navbar";
import Home from "./components/Home";
import Chart from "./components/Chart";
import Login from "./components/Login";
import Entry from "./components/Entry";
import TablePage from "./components/TablePage";
import { DUMMY } from "./utils/dummy";

function App() {
  useEffect(() => {
    localStorage.setItem('userdata', JSON.stringify(DUMMY));
  }, []);
  return (
    <>
      <DrawerAppBar />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/table",
        element: <TablePage />,
      },
      {
        path: "/entry",
        element: <Entry />,
      },
    ],
  },
]);

export default App;
