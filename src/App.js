import * as ReactDOM from "react-dom/client";
import LandingPageHome from "./Pages/Home/LandingPage";
import Dashboard from "./Pages/Dashboard";

import {
  createBrowserRouter,
} from "react-router-dom";

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
          path: "s/",
          element: <h1>Hello</h1>,
        },
        {
          path: "f/",
          element: <h1>Hello2</h1>,
        },
      ],
    },
  ]);