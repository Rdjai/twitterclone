import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import ProfilePage from "./pages/profile";
import MainContent from "./component/mainContent";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <MainContent />
      },
      {
        path: "profile",
        element: <ProfilePage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);



const App = () => {


  return <RouterProvider router={router} />;
};

export default App;
