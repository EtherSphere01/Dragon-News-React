import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout> </HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/demo-data/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/newsDetails/:news_id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/demo-data/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
