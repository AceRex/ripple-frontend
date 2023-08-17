import * as ReactDOM from "react-dom/client";
import LandingPageHome from "./Pages/Home/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Wallet from "./Pages/Dashboard/Pages/Wallet";
import Payroll from "./Pages/Dashboard/Pages/Payroll";
import EmployeeManagement from "./Pages/Dashboard/Pages/EmployeeManagement";
import BookKeeping from "./Pages/Dashboard/Pages/BookKeeping";
import QuickLoan from "./Pages/Dashboard/Pages/QuickLoan";
import Compliance from "./Pages/Dashboard/Pages/Complaince";
import { createBrowserRouter } from "react-router-dom";
import Index from "./Pages/Dashboard/Pages/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageHome />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "index",
        element: <Index />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "employee_management",
        element: <EmployeeManagement />,
      },
      {
        path: "payroll",
        element: <Payroll />,
      },
      {
        path: "compliance",
        element: <Compliance />,
      },
      {
        path: "quick_loan",
        element: <QuickLoan />,
      },
      {
        path: "book_keeping",
        element: <BookKeeping />,
      },
    ],
  },
]);
