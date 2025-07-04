import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> }
]);


const App = () => {


  return <RouterProvider router={router} />;
};

export default App;
