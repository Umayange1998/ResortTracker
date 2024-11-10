import React,{ lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import Loadable from "@loadable/component"
import LoadingAnimation from "./Component/LoadingAnimation/LoadingAnimation";
import SystemAlerts from "./Component/SystemAlerts/SystemAlerts";
import Layout from "./Component/Layout/layout"
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./Pages/home/home"
// import Login from "./Pages/Login/login"
import './App.css'
import SideNavigation from "./Component/SideNavigationBar/SideNavigation"
import Loading from "./Component/Loading/Loading";
import loadable from "@loadable/component";
const Employeeinfo = loadable(() => import("./Pages/Employeeinfo/Employeeinfo"), {
  fallback: <Loading />,
});

const Login = React.lazy(() => import("./Pages/Login/login"));
function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employeeinfo" element={<Employeeinfo />} />
            <Route path="/sidenavi" element={<SideNavigation />} />
            <Route path="/login" element={<React.Suspense fallback={<Loading />}><Login /></React.Suspense>} />


          </Routes>
        </Router>
      </div>
  );
}

export default App;