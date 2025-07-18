import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/profile";
import MainContent from "./component/mainContent";
import LoginPage from "./pages/login";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/mainpage";

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
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/mainpage",
    element: <MainPage />
  }
]);



const App = () => {


  return <RouterProvider router={router} />;
};

export default App;
