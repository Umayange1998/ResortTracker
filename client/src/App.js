import { lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import Loadable from "./Component/Loadable/Loadable";
import LoadingAnimation from "./Component/LoadingAnimation/LoadingAnimation";
import SystemAlerts from "./Component/SystemAlerts/SystemAlerts";
import Layout from "./Component/Layout/layout"
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./app/store";
import Employeeinfo from "./Pages/Employeeinfo/Employeeinfo"
import Home from "./Pages/home/home"
import './App.css'

// // Lazy loading components
// const Login = Loadable(lazy(() => import("./Pages/Login/login")));
// const Employeeinfo = Loadable(lazy(() => import("./Pages/Employeeinfo/Employeeinfo")));
// Add any additional pages here similarly as needed

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "employeeinfo",
//         element: <Employeeinfo/>,
//       },
//       // Add any additional routes here
//     ],
//   },
// ]);


// const App = () => {


  
//   useEffect(() => {
//     const handleMessage = (event) => {
//       if (event.data === "SavedAndPrinted" || event.data === "Printed") {
//         console.log("Printed prescription");
//       }
//     };
  
//     window.addEventListener("message", handleMessage);
//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   }, []);
  
//   console.log(store);
//   return (
//     <Provider store={store}>
//             <ThemeProvider>

//         <LoadingAnimation />
//         <SystemAlerts />
//         <RouterProvider router={router} />
//         </ThemeProvider>

//     </Provider>
//   );
// };
function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employeeinfo" element={<Employeeinfo />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;