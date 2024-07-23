import './App.css';
import axios from "axios";
import {useEffect} from "react"
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Employeeinfo from "./Pages/Employeeinfo/Employeeinfo";
import Home from "./Pages/home/home";
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/employeeinfo' exact Component={Employeeinfo}/>
          <Route path='/home' exact Component={Home}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
