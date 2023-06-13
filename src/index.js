import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeFeed from "./routes/home-feed";
import CreateChallenge from "./routes/create-challenge";
import ChallengeFeed from "./routes/challenge-feed";
import Login from "./routes/login";
import Signup from "./routes/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeFeed />,
  },
  {
    path: "/create",
    element: <CreateChallenge />,
  },
  {
    path: "/challenge/:slug",
    element: <ChallengeFeed />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
