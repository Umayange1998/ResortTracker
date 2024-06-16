import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function employeeinfo() {

    const [listofUsers, setlistofUsers] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:3001/Users").then((response)=>{
            setlistofUsers(response.data);
            console.log(response)
        })
    },[])
  return (
    <div>
      
    </div>
  )
}

export default employeeinfo
