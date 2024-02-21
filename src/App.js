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
import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const isAuthenticated = !!localStorage.getItem("session");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

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
        element: <PrivateRoute element={<Home />} />,
      },
      {
        path: "/chart",
        element: <PrivateRoute element={<Chart />} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/table",
        element: <PrivateRoute element={<TablePage />} />,
      },
      {
        path: "/entry",
        element: <PrivateRoute element={<Entry />} />,
      },
    ],
  },
]);

export default App;
