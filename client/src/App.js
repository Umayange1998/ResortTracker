import React,{ lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from "./app/store";
import Home from "./Pages/home/home"
import palette from "./theme/palette";
import './App.css'
import SideNavigation from "./Components/SideNavigationBar/SideNavigation"
import Loading from "./Components/Loading/Loading";
import componentsOverride from './theme/Overides'
import typography from "./theme/typography"
import loadable from "@loadable/component";
import Layout from "./Components/Layout/layout";
// const Employeeinfo = loadable(() => import("./Pages/Employeeinfo/Employeeinfo"), {
//   fallback: <Loading />,
// });

const Login = React.lazy(() => import("./Pages/Login/login"));
const Employeeinfo = React.lazy(() => import("./Pages/Employeeinfo/Employeeinfo"));
const Units = React.lazy(() => import("./Pages/Units/Unit"));
const Addnewemployee = React.lazy(()=>import("./Pages/AddNewEmployee/Addnewemployee"))
const theme = createTheme({
  palette: palette.light,
  typography,

})
  theme.components = componentsOverride(theme);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Layout/>
        ),
        children:[
          {
            path:"/employeeinfo",
            element: <Employeeinfo />,
          },
          {
            path:"/Units",
            element:<Units />,
          }
        ]
      }
    ]
  )
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
          <Route path="/login" element={<React.Suspense fallback={<Loading />}><Login /></React.Suspense>} />

            {/* <Route path="/" element={<Home />} />
            <Route path="/employeeinfo" element={<React.Suspense fallback={<Loading />}><Employeeinfo /></React.Suspense>} />
            <Route path="/Units" element={<React.Suspense fallback={<Loading />}><Units /></React.Suspense>} />

            <Route path="/SideNavigation" element={<SideNavigation />} />
            <Route path="/Addnewemployee" element={<React.Suspense fallback={<Loading />}><Addnewemployee /></React.Suspense>} /> */}



          </Routes>
        </Router>
      </div>
      <RouterProvider router={router} />

      </ThemeProvider>
  );
}

export default App;